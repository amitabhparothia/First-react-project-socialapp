import { addDoc, collection , deleteDoc, doc, getDocs, query, where} from "firebase/firestore";
import{Post as IPost} from "./main"
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { number } from "yup";
interface Props {
    post:IPost;
}

interface Like {
    likeId: String;
    userId: String;
}

export const Post = (props : Props) => {
    const {post} = props;
    const [user]= useAuthState(auth);

    const[likes, setLikes] = useState< Like[] | null>(null);

    const LikesRef = collection(db, "Likes");

    const likesDoc = query(LikesRef , where("postId" , "==" , post.id));

    const getLikes = async() =>  {
        const data =  await getDocs(likesDoc)
        setLikes(data.docs.map((doc) => ({userId: doc.data().userId  , likeId: doc.id})));
    };

    const addLike = async() => {
        try{  
          const newDoc = await addDoc(LikesRef, { userId: user?.uid , postId: post.id});
          if(user)
            setLikes((prev) => 
              prev 
              ? [...prev, {userId : user.uid , likeId: newDoc.id}] 
              : [{userId : user.uid , likeId: newDoc.id}]
            );
        }catch(err){
            console.log(err);
        }
    };

    const removeLike =async () => 
    {
        try{
            const likeToDeleteQuery = query( 
              LikesRef, 
              where("postId" , "==" , post.id),
              where("userId" , "==" , user?.uid)
            );
            const likeToDeleteData = await getDocs(likeToDeleteQuery);
            const likeId = likeToDeleteData.docs[0].id
            const likeToDelete = doc(db , "likes" , likeId)
            await deleteDoc(likeToDelete);

            if(user)
              setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId));
        }catch(err){
            console.log(err);
        }; 
        
    }
    const hasUserLiked = likes?.find((like) => like.userId ===user?.uid)

    
    useEffect(() => {
        getLikes();
    } , []);


    return ( 
      <div  className="post">
        <div className="post-title">
            <h1>Tittle - {post.title}</h1>
        </div>

        <div className="post-descr">
            <p><b>Post -</b> {post.description}</p>
        </div>

        <div>
            <p className="post-username"><b>Username - @</b>{post.username}</p>
            <div className="post-liked">
            <button  className="liked-button" onClick={hasUserLiked ? removeLike : addLike}>{hasUserLiked ? <>&#128078;</>: <>&#128077;</>}
            </button>
            { likes && <p> Likes :{likes?.length} </p>}
            </div>
            
            
        </div>

      </div>
      )
}