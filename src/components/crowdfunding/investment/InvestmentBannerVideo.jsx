"use client";
import Image from "next/image";
import React, { useState } from "react";
import youtube from "@/assets/crowdfund/1.webp";
import InvestmentBodyContent from "./InvestmentBodyContent";

const InvestmentBannerVideo = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleBackToProject = () => {
    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };
  return (
    <div className="flex-1 font-WhitneySemibold mt-20">
      <div className="font-WhitneySemibold">
        <div className="relative bg-black">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-5">
              <Image
                src={youtube}
                className="object-cover w-full h-full blur m-[-5px]"
                alt=""
              />
            </div>
          </div>

          <div className="relative mx-auto bg-black flex items-center max-w-7xl xl:-translate-x-20 opacity-100 transition-opacity duration-300 ease-in-out delay-0">
            <div className="relative w-full pointer-events-none pb-[56.25%]">
              <div className="absolute inset-0 bg-black flex items-center justify-center p-6 pointer-events-auto opacity-100 -translate-x-20 transition-opacity duration-300 ease-in-out delay-0">
                {/* Your content goes here */}
                <svg
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 272.1 92.78"
                  className="max-w-lg"
                >
                  <g data-name="Layer 1">
                    <g fill="#b0b0b0">
                      <path d="M205.316 40.7133H196.634L193.295 30.7817H177.934L174.594 40.7133H166.033L180.666 0H190.684L205.316 40.7133ZM179.816 24.4896H191.412L185.584 6.72386L179.816 24.4896Z" />
                      <path
                        d="M160.068 0V40.7133H151.689V0H160.068ZM134.02 0V40.7133H125.642V0H134.02ZM156.06 16.7171V23.5643H129.831V16.7171H156.06Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M97.4845 0C103.758 0 108.616 1.76835 112.056 5.30506C115.497 8.80064 117.217 13.8178 117.217 20.3566C117.217 26.8543 115.497 31.8715 112.056 35.4082C108.616 38.9449 103.758 40.7133 97.4845 40.7133H82.002V0H97.4845ZM97.0595 33.9277C100.864 33.9277 103.718 32.7762 105.62 30.4733C107.563 28.1292 108.535 24.757 108.535 20.3566C108.535 15.9563 107.563 12.6047 105.62 10.3017C103.718 7.95759 100.864 6.78554 97.0595 6.78554H90.3807V33.9277H97.0595Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M76.0581 40.7133H67.3757L64.0363 30.7817H48.6752L45.3358 40.7133H36.7749L51.4074 0H61.4256L76.0581 40.7133ZM50.5574 24.4896H62.1541L56.3254 6.72386L50.5574 24.4896Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M17.6683 0C22.2018 0 25.7638 1.11036 28.3543 3.33109C30.9449 5.55181 32.2401 8.53333 32.2401 12.2757C32.2401 16.2647 30.9449 19.3285 28.3543 21.467C25.7638 23.5643 22.222 24.613 17.729 24.613L16.879 25.1065H8.25736V40.7133H0V0H17.6683ZM16.6969 18.6294C19.0446 18.6294 20.7851 18.1565 21.9184 17.2106C23.0923 16.2236 23.6792 14.7226 23.6792 12.7075C23.6792 10.6924 23.0923 9.21189 21.9184 8.26602C20.7851 7.27904 19.0446 6.78554 16.6969 6.78554H8.25736V18.6294H16.6969ZM21.6149 20.4183L34.6081 40.7133H25.1971L14.4504 22.8858L21.6149 20.4183Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M199.824 64C199.065 64 198.397 63.8406 197.82 63.5219C197.243 63.2032 196.793 62.7457 196.469 62.1494C196.155 61.5428 195.999 60.8231 195.999 59.9904C195.999 59.1576 196.155 58.443 196.469 57.8467C196.793 57.2402 197.238 56.7775 197.805 56.4588C198.372 56.1401 199.014 55.9807 199.733 55.9807C200.471 55.9807 201.099 56.1349 201.615 56.4434C202.131 56.7518 202.526 57.1733 202.799 57.7079C203.072 58.2426 203.209 58.8491 203.209 59.5277C203.209 59.7128 203.203 59.8875 203.193 60.052C203.183 60.2165 203.168 60.3605 203.148 60.4838H197.046V59.2193H202.434L201.63 59.466C201.63 58.7669 201.458 58.2323 201.114 57.8622C200.77 57.4818 200.299 57.2916 199.702 57.2916C199.267 57.2916 198.888 57.3944 198.564 57.6C198.24 57.8056 197.992 58.114 197.82 58.5253C197.648 58.9263 197.562 59.4198 197.562 60.0058C197.562 60.5815 197.653 61.0699 197.835 61.4708C198.017 61.8718 198.275 62.1751 198.609 62.3807C198.943 62.5863 199.338 62.6891 199.793 62.6891C200.299 62.6891 200.709 62.5915 201.023 62.3961C201.336 62.2008 201.584 61.9283 201.767 61.5788L203.057 62.1957C202.875 62.5658 202.627 62.8896 202.313 63.1672C202.009 63.4345 201.645 63.6402 201.22 63.7841C200.795 63.928 200.33 64 199.824 64Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M187.83 64.0001C187.334 64.0001 186.874 63.9075 186.449 63.7225C186.034 63.5374 185.7 63.2393 185.447 62.828C185.194 62.4168 185.067 61.8822 185.067 61.2242V56.135H186.692V60.8078C186.692 61.5069 186.838 61.9901 187.132 62.2574C187.425 62.5144 187.835 62.643 188.361 62.643C188.614 62.643 188.857 62.6018 189.09 62.5196C189.333 62.4271 189.55 62.2883 189.743 62.1032C189.935 61.9079 190.082 61.6611 190.183 61.363C190.294 61.0648 190.35 60.7153 190.35 60.3143V56.135H191.974V63.8459H190.547L190.471 62.5967C190.208 63.0799 189.854 63.4346 189.409 63.6608C188.963 63.887 188.437 64.0001 187.83 64.0001Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M177.91 55.9807C178.517 55.9807 179.033 56.0732 179.458 56.2583C179.893 56.4331 180.258 56.685 180.551 57.014C180.844 57.343 181.067 57.7182 181.219 58.1398L179.686 58.7566C179.554 58.2837 179.342 57.9238 179.048 57.6771C178.765 57.4201 178.391 57.2916 177.925 57.2916C177.47 57.2916 177.08 57.3995 176.756 57.6154C176.432 57.821 176.185 58.1243 176.013 58.5253C175.851 58.9263 175.77 59.4198 175.77 60.0058C175.77 60.5815 175.856 61.0699 176.028 61.4708C176.2 61.8718 176.448 62.1751 176.771 62.3807C177.095 62.5863 177.48 62.6891 177.925 62.6891C178.269 62.6891 178.568 62.6326 178.821 62.5195C179.074 62.3961 179.281 62.2265 179.443 62.0106C179.615 61.7844 179.731 61.512 179.792 61.1932L181.264 61.7022C181.123 62.1648 180.9 62.5709 180.597 62.9205C180.303 63.2598 179.934 63.5271 179.489 63.7224C179.043 63.9075 178.532 64 177.955 64C177.207 64 176.544 63.8406 175.967 63.5219C175.39 63.2032 174.94 62.7457 174.616 62.1494C174.302 61.5428 174.146 60.8231 174.146 59.9904C174.146 59.1576 174.302 58.443 174.616 57.8467C174.94 57.2402 175.385 56.7775 175.952 56.4588C176.529 56.1401 177.181 55.9807 177.91 55.9807Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M167.523 64C166.764 64 166.071 63.8509 165.443 63.5528C164.816 63.2546 164.32 62.8331 163.956 62.2882L165.079 61.3012C165.301 61.7227 165.62 62.062 166.035 62.319C166.46 62.5658 166.966 62.6891 167.553 62.6891C168.018 62.6891 168.388 62.6069 168.661 62.4424C168.934 62.2779 169.071 62.0466 169.071 61.7484C169.071 61.5531 169.005 61.3834 168.874 61.2395C168.752 61.0853 168.514 60.9671 168.16 60.8848L166.566 60.5455C165.757 60.381 165.18 60.1189 164.836 59.759C164.492 59.3889 164.32 58.9211 164.32 58.3557C164.32 57.9341 164.441 57.5434 164.684 57.1836C164.927 56.8238 165.281 56.5359 165.747 56.32C166.222 56.0938 166.789 55.9807 167.447 55.9807C168.206 55.9807 168.853 56.1195 169.39 56.3971C169.926 56.6644 170.336 57.05 170.619 57.5537L169.496 58.5099C169.304 58.0986 169.02 57.7953 168.646 57.6C168.271 57.3944 167.882 57.2916 167.477 57.2916C167.153 57.2916 166.875 57.3327 166.642 57.4149C166.41 57.4972 166.232 57.6103 166.111 57.7542C165.99 57.8981 165.929 58.0678 165.929 58.2631C165.929 58.4687 166.005 58.6487 166.157 58.8029C166.308 58.9571 166.582 59.0753 166.976 59.1576L168.707 59.5277C169.435 59.6716 169.946 59.9184 170.24 60.2679C170.543 60.6072 170.695 61.0236 170.695 61.5171C170.695 62.0106 170.569 62.4475 170.316 62.8279C170.063 63.1981 169.698 63.4859 169.223 63.6916C168.747 63.8972 168.18 64 167.523 64Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M157.229 64C156.47 64 155.803 63.8406 155.226 63.5219C154.649 63.2032 154.199 62.7457 153.875 62.1494C153.561 61.5428 153.404 60.8231 153.404 59.9904C153.404 59.1576 153.561 58.443 153.875 57.8467C154.199 57.2402 154.644 56.7775 155.211 56.4588C155.777 56.1401 156.42 55.9807 157.138 55.9807C157.877 55.9807 158.504 56.1349 159.021 56.4434C159.537 56.7518 159.931 57.1733 160.204 57.7079C160.478 58.2426 160.614 58.8491 160.614 59.5277C160.614 59.7128 160.609 59.8875 160.599 60.052C160.589 60.2165 160.574 60.3605 160.554 60.4838H154.452V59.2193H159.84L159.036 59.466C159.036 58.7669 158.864 58.2323 158.52 57.8622C158.176 57.4818 157.705 57.2916 157.108 57.2916C156.673 57.2916 156.293 57.3944 155.97 57.6C155.646 57.8056 155.398 58.114 155.226 58.5253C155.054 58.9263 154.968 59.4198 154.968 60.0058C154.968 60.5815 155.059 61.0699 155.241 61.4708C155.423 61.8718 155.681 62.1751 156.015 62.3807C156.349 62.5863 156.744 62.6891 157.199 62.6891C157.705 62.6891 158.115 62.5915 158.429 62.3961C158.742 62.2008 158.99 61.9283 159.172 61.5788L160.463 62.1957C160.28 62.5658 160.032 62.8896 159.719 63.1672C159.415 63.4345 159.051 63.6402 158.626 63.7841C158.201 63.928 157.735 64 157.229 64Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M146.237 53.6675C147.31 53.6675 148.16 53.9399 148.787 54.4848C149.425 55.0297 149.743 55.7648 149.743 56.6901C149.743 57.6463 149.425 58.3865 148.787 58.9109C148.16 59.4249 147.31 59.6819 146.237 59.6819L146.085 59.7745H143.763V63.8458H142.154V53.6675H146.237ZM146.116 58.4019C146.773 58.4019 147.259 58.2683 147.573 58.001C147.897 57.7234 148.058 57.3019 148.058 56.7364C148.058 56.1812 147.897 55.7648 147.573 55.4872C147.259 55.2096 146.773 55.0709 146.116 55.0709H143.763V58.4019H146.116ZM147.072 58.7412L150.335 63.8458H148.468L145.675 59.3889L147.072 58.7412Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M128.826 53.8679V61.5325C128.826 61.9129 128.923 62.1905 129.115 62.3653C129.317 62.54 129.585 62.6274 129.919 62.6274C130.193 62.6274 130.43 62.5863 130.633 62.5041C130.835 62.4115 131.022 62.2882 131.194 62.1339L131.559 63.3368C131.326 63.5425 131.038 63.707 130.693 63.8303C130.36 63.9434 129.985 64 129.57 64C129.135 64 128.735 63.928 128.371 63.7841C128.007 63.6401 127.723 63.4088 127.521 63.0901C127.319 62.7611 127.212 62.3344 127.202 61.8101V54.3306L128.826 53.8679ZM131.437 56.1349V57.4303H125.745V56.1349H131.437Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M120.663 58.8954C120.663 58.3814 120.522 57.9855 120.238 57.7079C119.965 57.4201 119.586 57.2761 119.1 57.2761C118.645 57.2761 118.255 57.3841 117.931 57.6C117.607 57.8159 117.369 58.1655 117.218 58.6487L115.852 58.0626C116.044 57.4355 116.418 56.9317 116.975 56.5513C117.542 56.1709 118.27 55.9807 119.161 55.9807C119.768 55.9807 120.304 56.0835 120.77 56.2891C121.235 56.4845 121.599 56.7826 121.862 57.1836C122.136 57.5846 122.272 58.0986 122.272 58.7258V62.1648C122.272 62.5452 122.46 62.7354 122.834 62.7354C123.016 62.7354 123.193 62.7097 123.365 62.6583L123.274 63.7995C123.041 63.9126 122.748 63.9691 122.394 63.9691C122.07 63.9691 121.776 63.9126 121.513 63.7995C121.26 63.6761 121.058 63.4962 120.906 63.2597C120.765 63.013 120.694 62.7097 120.694 62.3499V62.2419L121.028 62.2265C120.937 62.6275 120.749 62.9616 120.466 63.2289C120.183 63.4859 119.854 63.6813 119.479 63.8149C119.105 63.9383 118.725 64 118.341 64C117.865 64 117.435 63.9229 117.051 63.7687C116.676 63.6144 116.378 63.3831 116.155 63.0747C115.943 62.756 115.836 62.3653 115.836 61.9026C115.836 61.3269 116.019 60.854 116.383 60.4838C116.757 60.1137 117.283 59.8618 117.961 59.7282L120.906 59.1422L120.891 60.2988L118.751 60.746C118.326 60.8283 118.007 60.9465 117.795 61.1007C117.582 61.2549 117.476 61.4811 117.476 61.7793C117.476 62.0671 117.582 62.2985 117.795 62.4732C118.017 62.6377 118.311 62.72 118.675 62.72C118.928 62.72 119.171 62.6891 119.403 62.6275C119.646 62.5658 119.864 62.4681 120.056 62.3344C120.248 62.1905 120.395 62.0106 120.496 61.7947C120.608 61.5685 120.663 61.3012 120.663 60.9928V58.8954Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M108.868 64C108.109 64 107.441 63.8406 106.864 63.5219C106.287 63.2032 105.837 62.7457 105.513 62.1494C105.199 61.5428 105.042 60.8231 105.042 59.9904C105.042 59.1576 105.199 58.443 105.513 57.8467C105.837 57.2402 106.282 56.7775 106.849 56.4588C107.415 56.1401 108.058 55.9807 108.777 55.9807C109.515 55.9807 110.143 56.1349 110.659 56.4434C111.175 56.7518 111.569 57.1733 111.843 57.7079C112.116 58.2426 112.252 58.8491 112.252 59.5277C112.252 59.7128 112.247 59.8875 112.237 60.052C112.227 60.2165 112.212 60.3605 112.192 60.4838H106.09V59.2193H111.478L110.674 59.466C110.674 58.7669 110.502 58.2323 110.158 57.8622C109.814 57.4818 109.343 57.2916 108.746 57.2916C108.311 57.2916 107.932 57.3944 107.608 57.6C107.284 57.8056 107.036 58.114 106.864 58.5253C106.692 58.9263 106.606 59.4198 106.606 60.0058C106.606 60.5815 106.697 61.0699 106.879 61.4708C107.061 61.8718 107.319 62.1751 107.653 62.3807C107.987 62.5863 108.382 62.6891 108.837 62.6891C109.343 62.6891 109.753 62.5915 110.067 62.3961C110.38 62.2008 110.628 61.9283 110.81 61.5788L112.101 62.1957C111.919 62.5658 111.671 62.8896 111.357 63.1672C111.053 63.4345 110.689 63.6402 110.264 63.7841C109.839 63.928 109.374 64 108.868 64Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M97.4624 63.8458V56.1349H98.8437L98.9955 57.5229C99.1979 57.0191 99.4964 56.6387 99.891 56.3817C100.296 56.1144 100.792 55.9807 101.379 55.9807C101.53 55.9807 101.682 55.9961 101.834 56.027C101.986 56.0475 102.112 56.0835 102.213 56.1349L101.986 57.5846C101.874 57.5434 101.748 57.5126 101.606 57.492C101.475 57.4612 101.293 57.4458 101.06 57.4458C100.746 57.4458 100.437 57.5332 100.134 57.7079C99.8303 57.8724 99.5773 58.1243 99.375 58.4636C99.1827 58.8029 99.0865 59.2347 99.0865 59.759V63.8458H97.4624Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M88.801 63.9999C87.8599 63.9999 87.0453 63.7892 86.3572 63.3676C85.669 62.9461 85.1327 62.3498 84.7482 61.5787C84.3637 60.7974 84.1714 59.8566 84.1714 58.7566C84.1714 57.677 84.3687 56.7466 84.7634 55.9652C85.1681 55.1839 85.7348 54.5824 86.4634 54.1609C87.2021 53.7291 88.0471 53.5132 88.9983 53.5132C90.0406 53.5132 90.8805 53.7085 91.518 54.0992C92.1656 54.4899 92.6817 55.0965 93.0663 55.919L91.5635 56.6438C91.3713 56.0783 91.0525 55.6568 90.6073 55.3792C90.1721 55.0913 89.6409 54.9474 89.0135 54.9474C88.3861 54.9474 87.8346 55.0965 87.359 55.3946C86.8935 55.6928 86.5292 56.1297 86.2661 56.7055C86.003 57.2709 85.8714 57.9546 85.8714 58.7566C85.8714 59.5688 85.9878 60.2627 86.2205 60.8385C86.4533 61.4039 86.8024 61.8358 87.2679 62.1339C87.7435 62.4321 88.3254 62.5811 89.0135 62.5811C89.3879 62.5811 89.737 62.5349 90.0608 62.4423C90.3846 62.3395 90.668 62.1956 90.9108 62.0105C91.1537 61.8152 91.3409 61.5736 91.4725 61.2857C91.6141 60.9876 91.685 60.638 91.685 60.237V59.944H88.7706V58.6023H93.127V63.8457H91.9127L91.8216 61.7946L92.1252 61.9488C91.8823 62.5966 91.4775 63.1003 90.9108 63.4602C90.3543 63.82 89.651 63.9999 88.801 63.9999Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M70.1864 64C69.4275 64 68.7596 63.8406 68.1828 63.5219C67.606 63.2032 67.1557 62.7457 66.8319 62.1494C66.5182 61.5428 66.3613 60.8231 66.3613 59.9904C66.3613 59.1576 66.5182 58.443 66.8319 57.8467C67.1557 57.2402 67.6009 56.7775 68.1676 56.4588C68.7343 56.1401 69.3769 55.9807 70.0954 55.9807C70.8341 55.9807 71.4615 56.1349 71.9776 56.4434C72.4936 56.7518 72.8883 57.1733 73.1615 57.7079C73.4347 58.2426 73.5713 58.8491 73.5713 59.5277C73.5713 59.7128 73.5663 59.8875 73.5562 60.052C73.546 60.2165 73.5309 60.3605 73.5106 60.4838H67.4087V59.2193H72.7972L71.9927 59.466C71.9927 58.7669 71.8207 58.2323 71.4766 57.8622C71.1326 57.4818 70.662 57.2916 70.065 57.2916C69.6299 57.2916 69.2504 57.3944 68.9266 57.6C68.6028 57.8056 68.3548 58.114 68.1828 58.5253C68.0108 58.9263 67.9248 59.4198 67.9248 60.0058C67.9248 60.5815 68.0158 61.0699 68.198 61.4708C68.3801 61.8718 68.6382 62.1751 68.9721 62.3807C69.306 62.5863 69.7007 62.6891 70.1561 62.6891C70.662 62.6891 71.0719 62.5915 71.3856 62.3961C71.6993 62.2008 71.9472 61.9283 72.1293 61.5788L73.4196 62.1957C73.2374 62.5658 72.9895 62.8896 72.6758 63.1672C72.3722 63.4345 72.0079 63.6402 71.5829 63.7841C71.1579 63.928 70.6924 64 70.1864 64Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M55.4761 63.8458V52.665H57.1002V57.3687C57.3532 56.8854 57.6922 56.5359 58.1172 56.32C58.5523 56.0938 59.033 55.9807 59.5592 55.9807C60.0955 55.9807 60.5762 56.0887 61.0012 56.3046C61.4364 56.5102 61.7804 56.8238 62.0334 57.2453C62.2864 57.6668 62.4129 58.2014 62.4129 58.8491V63.8458H60.7887V59.3735C60.7887 58.6127 60.6319 58.0832 60.3182 57.785C60.0146 57.4869 59.6301 57.3378 59.1646 57.3378C58.8407 57.3378 58.5169 57.4201 58.1931 57.5846C57.8794 57.7388 57.6163 57.9958 57.4038 58.3556C57.2014 58.7052 57.1002 59.1781 57.1002 59.7744V63.8458H55.4761Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M52.0226 53.6675V55.0863H48.5922V63.8458H46.968V55.0863H43.5376V53.6675H52.0226Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M29.2276 64C28.6002 64 28.0285 63.8406 27.5124 63.5219C27.0064 63.2032 26.6067 62.7457 26.3132 62.1494C26.0198 61.5531 25.873 60.8385 25.873 60.0058C25.873 59.1421 26.0299 58.4122 26.3436 57.8159C26.6573 57.2196 27.0772 56.7672 27.6034 56.4588C28.1297 56.1401 28.7065 55.9807 29.3339 55.9807C29.9815 55.9807 30.5279 56.1606 30.9732 56.5205C31.4184 56.8803 31.717 57.3481 31.8687 57.9238L31.6866 58.0935V52.665H33.3107V63.8458H31.8687L31.7473 61.7484L31.9598 61.7638C31.889 62.2265 31.722 62.6275 31.4589 62.9667C31.1958 63.2957 30.8669 63.5528 30.4723 63.7378C30.0877 63.9126 29.6728 64 29.2276 64ZM29.5767 62.6737C30.0118 62.6737 30.3863 62.5606 30.7 62.3344C31.0137 62.1083 31.2565 61.7895 31.4286 61.3783C31.6006 60.967 31.6866 60.4736 31.6866 59.8978C31.6866 59.3632 31.6006 58.9057 31.4286 58.5253C31.2565 58.1346 31.0137 57.8364 30.7 57.6308C30.3964 57.4252 30.0422 57.3224 29.6374 57.3224C28.9594 57.3224 28.4332 57.5589 28.0588 58.0318C27.6844 58.5047 27.4972 59.1576 27.4972 59.9903C27.4972 60.8231 27.6793 61.4811 28.0436 61.9643C28.4079 62.4373 28.919 62.6737 29.5767 62.6737Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M14.9419 63.8458V56.1349H16.3839L16.4901 58.1398L16.2776 57.9238C16.4193 57.4818 16.6217 57.1168 16.8848 56.8289C17.158 56.5308 17.4768 56.3149 17.8411 56.1812C18.2155 56.0475 18.6101 55.9807 19.025 55.9807C19.5614 55.9807 20.042 56.0887 20.467 56.3046C20.9022 56.5102 21.2462 56.8238 21.4992 57.2453C21.7522 57.6668 21.8787 58.2014 21.8787 58.8491V63.8458H20.2545V59.3581C20.2545 58.5973 20.0977 58.0729 19.784 57.7851C19.4804 57.4869 19.0959 57.3378 18.6304 57.3378C18.2964 57.3378 17.9726 57.4201 17.6589 57.5846C17.3452 57.7388 17.0821 57.9907 16.8696 58.3402C16.6672 58.6898 16.566 59.1576 16.566 59.7436V63.8458H14.9419Z"
                        fill="#b0b0b0"
                      />
                      <path
                        d="M11.42 63.8458H9.70478L8.74851 61.1778H4.54393L3.58766 63.8458H1.91797L5.69753 53.6675H7.64044L11.42 63.8458ZM4.9993 59.8362H8.29314L6.65381 55.0863L4.9993 59.8362Z"
                        fill="#b0b0b0"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="absolute inset-0">
                <div className="absolute inset-0 transition-opacity duration-300">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/fozskMtdwI8?si=lPiGvmqwMetjmkT7"
                    title="Radha - The Rescue | AEPL"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute pointer-events-none top-0 bottom-0 right-0 hidden xl:block w-1/2 h-auto"
            style={{
              background:
                "linear-gradient(to left, rgb(0, 0, 0) 256px, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>
          <div className="hidden xl:block absolute inset-0 z-10 top-1/2 -translate-y-1/2">
            <div className="relative w-full h-full flex justify-end items-center mx-auto max-w-7xl">
              <div className="max-w-[460px]">
                <div className="text-white px-6">
                  <p
                    className="text-sm leading-relaxed tracking-none"
                    data-cy="funding-status-heading"
                  >
                    <span className="tracking-wide font-medium uppercase">
                      Now Funding
                    </span>{" "}
                    <span>| Offering: Reg CF</span>
                  </p>
                  <h2
                    className="text-2xl font-semibold leading-normal tracking-tighter md:text-4xl md:font-medium md:leading-normal md:tracking-tighter"
                    data-cy="project-name-header"
                  >
                    Radha - The Rescue
                  </h2>
                </div>
                <div className="px-6 mt-6">
                  <div>
                    <div className="w-full h-2 relative rounded-lg bg-white bg-opacity-30">
                      <div
                        role="progressbar"
                        className="w-full bg-green-dark rounded-lg bg-opacity-80 h-2 relative"
                      ></div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-white">
                    <div className="w-full flex md:block pr-1">
                      <div>
                        <div className="lg:mt-1">
                          <div className="flex flex-col">
                            <div
                              className="text-2xl font-semibold leading-normal tracking-tighter sm:text-4xl sm:font-medium sm:leading-normal sm:tracking-tightest"
                              data-cy="capital-amount"
                            >
                              $0
                            </div>
                            {/* <div className="text-sm leading-relaxed tracking-none">
                              of $618,000 max *
                            </div> */}
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex flex-row items-center text-sm md:text-md">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              className="mr-1"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
                            </svg>
                            <div
                              className="caption-md sm:caption-lg whitespace-nowrap text-xl leading-5"
                              data-cy="backers_number"
                            >
                              448 People*
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-1 w-full pl-1">
                      <div className="flex flex-col items-end">
                        <div className="text-2xl font-semibold leading-normal tracking-tighter md:text-4xl md:font-medium">
                          4
                        </div>
                        <div className="text-sm leading-relaxed whitespace-nowrap text-right capitalize">
                          Days Left*
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleBackToProject}
                      data-cy="project-cta-button"
                      className="focus:outline-none cursor-pointer focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded block w-full mt-2 mx-auto bg-yellow-dark hover:bg-yellow-dark-1 focus-visible:ring-yellow-dark-3 active:bg-yellow-dark-3 disabled:bg-yellow-dark-disabled text-core-white disabled:text-core-gray-500 max-w-[420px] capitalize"
                    >
                      Donation
                    </button>
                  </div>
                  <div className="text-white">
                    <p className="capitalize text-xl leading-relaxed tracking-none mt-3 text-center font-light">
                      $25 minimum investment
                    </p>
                  </div>
                  <p className="mt-4 px-1 mx-auto text-xs font-medium leading-tight tracking-none text-white">
                    *People includes all persons who have submitted subscription
                    materials. Amount raised is an estimate that includes
                    subscriptions, however not all such amounts have been
                    accepted or closed, & some subscriptions may not be
                    accepted.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden xl:block absolute z-20 transition left-1/2 top-1/2 -ml-20"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <button
              className="block text-white border-0 outline-none focus:outline-none opacity-50 hover:opacity-100 transition-opacity"
              aria-label="play-video"
              style={{ fontSize: "90px" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="offering_content"
          className="w-full px-6 py-3 lg:pt-6 lg:text-center xl:hidden max-w-[1264px]"
        >
          <div className="text-black">
            <p className="text-sm leading-relaxed tracking-none text-[#707070]">
              <span className="tracking-wide uppercase">now funding </span>{" "}
              <span> | Offering: Reg CF</span>
            </p>
            <h2 className="text-2xl font-semibold leading-normal tracking-tighter md:text-4xl md:font-medium md:leading-normal md:tracking-tightest">
              Radha - The Rescue
            </h2>
          </div>
        </div>
        <div className="p-6 border-t border-b md:border border-gray-8 bg-gradient-to-br from-[#f0f0f0] to-[#f0f0f0] md:mx-6 md:rounded xl:hidden max-w-[960px] lg:mx-auto">
          <div>
            <div className="w-full h-2 relative rounded-lg bg-black bg-opacity-10">
              <div
                role="progressbar"
                className="w-full bg-green-dark rounded-lg bg-opacity-80 h-2 relative"
              ></div>
            </div>
          </div>
          <div className="mt-2 flex justify-between text-black">
            <div className="w-full flex md:block pr-1">
              <div>
                <div className="lg:mt-1">
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold leading-normal tracking-tighter sm:text-4xl sm:font-medium sm:leading-normal">
                      $0
                    </div>
                    {/* <div className="text-sm leading-relaxed tracking-none">
                      of $618,000 max *
                    </div> */}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex flex-row items-center text-sm md:text-md">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="mr-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
                    </svg>
                    <div className="caption-md sm:caption-lg whitespace-nowrap capitalize text-xl leading-5">
                      448 people*
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-1 w-full pl-1">
              <div className="flex flex-col items-end">
                <div className="text-2xl font-semibold leading-normal tracking-tighter md:text-4xl md:font-medium">
                  4
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="capitalize text-sm leading-relaxed tracking-none whitespace-nowrap text-right">
              days left*
            </div>
            <button
              onClick={handleBackToProject}
              className="focus:outline-none cursor-pointer focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded block w-full mt-2 mx-auto bg-yellow-dark hover:bg-yellow-dark focus-visible:ring-yellow-dark-3 active:bg-yellow-dark-3 disabled:bg-yellow-dark-disabled text-core-white disabled:text-core-gray-500 capitalize"
            >
              Donation
            </button>
          </div>
          <div className="text-black">
            <p className="text-xl leading-relaxed tracking-none mt-3 text-center font-light capitalize">
              $25 minimum investment
            </p>
          </div>
          <div className="mt-4 mb-2"></div>
          <p className="mt-4 px-1 mx-auto text-[11px] leading-tight tracking-none text-gray-600">
            *People includes all persons who have submitted subscription
            materials. Amount raised is an estimate that includes subscriptions,
            however not all such amounts have been accepted or closed, & some
            subscriptions may not be accepted.
          </p>
        </div>
        <div className="h-[1px]"></div>
        <InvestmentBodyContent />
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div
            className="fixed top-0 left-0 w-full h-full"
            onClick={closePopup}
          />
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white">
            <div className="mx-auto max-w-lg">
              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Get started today
              </h1>

              <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati sunt dolores deleniti inventore quaerat mollitia?
              </p>

              <form
                action=""
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              >
                <p className="text-center text-lg font-medium">
                  Sign in to your account
                </p>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type="password"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  onClick={closePopup}
                  type="submit"
                  className="block cursor-pointer w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>

                <p className="text-center text-sm text-gray-500">
                  No account?
                  <a className="underline cursor-pointer" href="">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentBannerVideo;
