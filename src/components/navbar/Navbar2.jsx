// "use client";
// import React from "react";
// import Dropdown from "../Dropdown";
// import { dropdownItems, dropdownItems2, nav } from "../../data/nav2";
// import Link from "next/link";

// const Navbar2 = ({ data }) => {
//   function handleScroll(section) {
//     let value = document.getElementById(section);
//     console.log(value);
//     if (value) {
//       value.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//         inline: "center",
//       });
//     }
//   }

//   return (
//     <nav>
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="md:hidden">
//           <button className="text-black focus:outline-none">Menu</button>
//         </div>
//         <div className="hidden lg:flex space-x-4">
//           <Dropdown
//             buttonContent="Services"
//             categories={[
//               {
//                 title: "Project Types We Cover",
//                 bgColor: "gray-600",
//                 items: dropdownItems,
//               },
//               {
//                 title: "Academic Fields & Subjects",
//                 bgColor: "gray-700",
//                 items: dropdownItems2,
//               },
//             ]}
//           />

//           {nav.map((item, index) => (
//             <Link
//               key={index}
//               href={`#${item.href}`}
//               className="text-black hover:text-pink-darkPink cursor-pointer"
//             >
//               {item.name}
//             </Link>
//           ))}

//           <Link
//             href="/blog"
//             className="text-black hover:text-pink-darkPink cursor-pointer"
//           >
//             Blog
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar2;
