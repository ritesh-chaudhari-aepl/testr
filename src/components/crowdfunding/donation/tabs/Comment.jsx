// import CommentCard from "@/components/cards/CommentCard";
// import React from "react";

// const Comment = () => {
//   return (
//     <>
//       {/* about bar */}
//       <div className="bg-gray-100 border border-gray-8 rounded-sm py-1 mb-6">
//         <h2 className="text-lg font-semibold leading-normal tracking-tight text-center uppercase">
//           Comments
//         </h2>
//       </div>
//       {/* about content */}
//       <div className="h-full">
//         {/* image */}
//         <div className="mb-4 ">
//           <div className="flex items-center ">
//             <h3 className="text-xl font-semibold leading-normal tracking-tight ">
//               Supporters Comments
//             </h3>
//           </div>
//           {/* mail application type */}
//           <div className="px-6 grid gap-6 py-8 my-8 w-full border rounded-md bg-slate-50 border-gray-8">
//             <div className="flex justify-between w-full items-center gap-3 px-6 py-2 rounded-md bg-slate-100 border border-gray-7">
//               <p>Write something to cheer us...</p>
//               <a className="cursor-pointer inline-block w-full rounded-md bg-yellow-dark px-6 py-2 font-medium text-white sm:w-auto">
//                 Post
//               </a>
//             </div>
//             <CommentCard
//               nameShort="P S"
//               name="Paul Singh"
//               time="12 hours"
//               desc="Please come forward to help ... Every single penny prayers matters...🙏🙏🙏🙏"
//             />
//             <span className="last:mb-0 border-b border-gray-8 "></span>
//             <CommentCard
//               nameShort="P K"
//               name="Pallavi Kashyap"
//               time="12 hours"
//               desc="आपकी छोटी सी मदद किसी के लिए बहुत बड़ी हो सकती है।"
//             />
//             <span className="last:mb-0 border-b border-gray-8 "></span>
//             <CommentCard
//               nameShort="V K"
//               name="Vikash Kumar"
//               time="12 hours"
//               desc="Please come forward and support my dearest friend 🙏🙏🙏🙏🙏"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Comment;
// dynamic
// import React, { useState, useEffect } from "react";
// import CommentCard from "@/components/cards/CommentCard";
// import ForComment from "@/components/modals/ForComment";

// const Comment = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   // Load comments from localStorage on component mount
//   useEffect(() => {
//     const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
//     setComments(storedComments);
//   }, []);

//   // Save comments to localStorage whenever comments change
//   useEffect(() => {
//     localStorage.setItem("comments", JSON.stringify(comments));
//   }, [comments]);

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const openPopup = () => {
//     // Open the popup for authorization
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     // Close the popup
//     setShowPopup(false);
//   };

//   const handlePostComment = () => {
//     if (newComment.trim() !== "") {
//       // Simulating user authentication, you may need to replace this with actual authentication logic
//       const isAuthenticated = true;

//       if (isAuthenticated) {
//         // Proceed to post the comment
//         const postedComment = {
//           nameShort: "Your Initials",
//           name: "Your Name",
//           time: "Just Now",
//           desc: newComment,
//         };
//         // const newComments = [
//         //   {
//         //     nameShort: "P S",
//         //     name: "Paul Singh",
//         //     time: "12 hours",
//         //     desc: "Please come forward to help ... Every single penny prayers matters...🙏🙏🙏🙏",
//         //   },
//         //   {
//         //     nameShort: "P K",
//         //     name: "Pallavi Kashyap",
//         //     time: "12 hours",
//         //     desc: "आपकी छोटी सी मदद किसी के लिए बहुत बड़ी हो सकती है।",
//         //   },
//         //   {
//         //     nameShort: "V K",
//         //     name: "Vikash Kumar",
//         //     time: "12 hours",
//         //     desc: "Please come forward and support my dearest friend 🙏🙏🙏🙏🙏",
//         //   },
//         // ];

//         const newComments = [postedComment, ...comments];
//         setComments(newComments);
//         setNewComment("");
//       } else {
//         // Show the popup for authorization
//         openPopup();
//       }
//     }
//   };

//   return (
//     <>
//       {/* about bar */}
//       <div className="bg-gray-100 border border-gray-8 rounded-sm py-1 mb-6">
//         <h2 className="text-lg font-semibold leading-normal tracking-tight text-center uppercase">
//           Comments
//         </h2>
//       </div>
//       {/* about content */}
//       <div className="h-full">
//         {/* image */}
//         <div className="mb-4">
//           <div className="flex items-center">
//             <h3 className="text-xl font-semibold leading-normal tracking-tight">
//               Supporters Comments
//             </h3>
//           </div>
//           {/* mail application type */}
//           <div className="px-6 grid gap-6 py-8 my-8 w-full border rounded-md bg-slate-50 border-gray-8">
//             <div className="flex justify-between w-full items-center gap-3 px-6 py-2 rounded-md bg-slate-100 border border-gray-7">
//               <input
//                 type="text"
//                 value={newComment}
//                 onChange={handleCommentChange}
//                 placeholder="Write something to cheer us..."
//                 className="w-full focus:outline-none"
//               />
//               <button
//                 onClick={handlePostComment}
//                 className="cursor-pointer inline-block w-full rounded-md bg-yellow-dark px-6 py-2 font-medium text-white sm:w-auto"
//               >
//                 Post
//               </button>
//             </div>
//             {comments.map((comment, index) => (
//               <React.Fragment key={index}>
//                 <CommentCard {...comment} />
//                 {index !== comments.length - 1 && (
//                   <span className="last:mb-0 border-b border-gray-8"></span>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Popup */}
//       {showPopup && <ForComment btnCloseClick={closePopup} />}
//     </>
//   );
// };

// export default Comment;

// functional
import React, { useState, useEffect } from "react";
import CommentCard from "@/components/cards/CommentCard";
import ForComment from "@/components/modals/ForComment";

const Comment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const openPopup = () => {
    // Open the popup for authorization
    setShowPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      // Simulating user authentication, you may need to replace this with actual authentication logic
      const isAuthenticated = true;

      if (isAuthenticated) {
        // Proceed to post the comment
        const postedComment = {
          nameShort: "Your Initials",
          name: "Your Name",
          time: "Just Now",
          desc: newComment,
        };

        const newComments = [postedComment, ...comments];
        setComments(newComments);
        setNewComment("");
      } else {
        // Show the popup for authorization
        openPopup();
      }
    }
  };

  return (
    <>
      {/* about bar */}
      <div className="bg-gray-100 border border-gray-8 rounded-sm py-1 mb-6">
        <h2 className="text-lg font-semibold leading-normal tracking-tight text-center uppercase">
          Comments
        </h2>
      </div>
      {/* about content */}
      <div className="h-full">
        {/* image */}
        <div className="mb-4">
          <div className="flex items-center">
            <h3 className="text-xl font-semibold leading-normal tracking-tight">
              Supporters Comments
            </h3>
          </div>
          {/* mail application type */}
          <div className="px-6 grid gap-6 py-8 my-8 w-full border rounded-md bg-slate-50 border-gray-8">
            <div className="flex justify-between w-full items-center gap-3 px-6 py-2 rounded-md bg-slate-100 border border-gray-7">
              <input
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Write something to cheer us..."
                className="w-full focus:outline-none"
              />
              <button
                title="Post Comments"
                name="Post Comments"
                aria-label="Post Comments"
                onClick={handlePostComment}
                className="cursor-pointer inline-block w-full rounded-md bg-yellow-dark px-6 py-2 font-medium text-white sm:w-auto"
              >
                Post
              </button>
            </div>
            {comments.map((comment, index) => (
              <React.Fragment key={index}>
                <CommentCard {...comment} />
                {index !== comments.length - 1 && (
                  <span className="last:mb-0 border-b border-gray-8"></span>
                )}
                <span className="last:mb-0 border-b border-gray-8 "></span>
              </React.Fragment>
            ))}
            {/* Default Comments */}
            <CommentCard
              nameShort="P S"
              name="Paul Singh"
              time="12 hours"
              desc="Please come forward to help ... Every single penny prayers matters...🙏🙏🙏🙏"
            />
            <span className="last:mb-0 border-b border-gray-8 "></span>
            <CommentCard
              nameShort="P K"
              name="Pallavi Kashyap"
              time="12 hours"
              desc="आपकी छोटी सी मदद किसी के लिए बहुत बड़ी हो सकती है।"
            />
            <span className="last:mb-0 border-b border-gray-8 "></span>
            <CommentCard
              nameShort="V K"
              name="Vikash Kumar"
              time="12 hours"
              desc="Please come forward and support my dearest friend 🙏🙏🙏🙏🙏"
            />
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && <ForComment btnCloseClick={closePopup} />}
    </>
  );
};

export default Comment;
