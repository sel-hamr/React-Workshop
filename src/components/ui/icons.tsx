type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  listTopics1: (props: IconProps) => (
    <svg
      width="135"
      height="114"
      viewBox="0 0 135 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="absolute bottom-1/2 -right-36 scale-150 -z-10"
    >
      <path
        d="M7.70435 21.6121C10.4807 20.8486 13.3959 20.3628 16.2416 19.9463C19.1568 19.5993 22.0025 19.391 24.9177 19.2522C30.748 19.1134 36.6478 19.5993 42.4087 20.7792C45.3239 21.4039 48.1696 22.1674 50.946 23.1391C53.7223 24.1108 56.4293 25.3602 59.0668 26.7484C60.3856 27.4425 61.6349 28.2059 62.8843 29.0388C63.509 29.4553 64.1337 29.8718 64.7583 30.2882L66.4936 31.4681C68.8535 33.0646 71.2133 34.5221 73.712 35.7715C76.2108 37.0209 78.7095 38.1314 81.347 38.6867C83.9845 39.3808 86.6221 39.5196 89.3984 39.3114C92.1748 39.1726 95.0205 38.6173 98.0051 38.4785C100.99 38.2702 104.113 38.4784 107.028 39.2419C107.792 39.3808 108.486 39.589 109.18 39.7972L109.458 39.8666C109.527 39.8666 109.666 39.936 109.805 40.0055C110.013 40.0749 110.221 40.2137 110.429 40.2831C110.846 40.4913 111.193 40.6995 111.54 40.9078C112.859 41.8101 113.969 42.8512 114.941 43.8923C117.023 46.044 118.897 48.1957 120.841 50.2779C122.784 52.3602 124.797 54.373 127.087 56.0389C128.267 56.8718 129.447 57.5659 130.835 57.9129C131.53 58.1211 132.224 58.2599 132.918 58.2599C133.612 58.2599 134.306 58.1211 135 57.9129C133.681 58.5376 132.154 58.7458 130.697 58.4682C129.239 58.1905 127.851 57.6353 126.532 56.9412C125.213 56.2471 124.033 55.3448 122.853 54.4425C121.674 53.5402 120.563 52.5684 119.522 51.5967C117.37 49.6532 115.357 47.571 113.206 45.6969C112.164 44.7946 111.054 43.8229 110.013 43.1982C109.735 43.0594 109.458 42.9206 109.249 42.7818C109.111 42.7124 108.972 42.7124 108.902 42.643L108.694 42.5735L108.416 42.5042C107.722 42.3653 107.098 42.1571 106.404 42.0877C105.709 41.9489 105.015 41.8795 104.391 41.8101C103.697 41.7407 103.003 41.6712 102.378 41.6712C100.99 41.6018 99.6709 41.6713 98.2827 41.8101C95.5064 42.0877 92.73 42.643 89.676 42.9206C86.6915 43.1982 83.4987 43.0594 80.5141 42.3653C77.5296 41.6712 74.6838 40.4913 72.0463 39.1725C69.4087 37.7844 66.8406 36.2574 64.4807 34.5222L62.6761 33.2728C62.1208 32.8564 61.5655 32.4399 60.9409 32.0928C59.7609 31.3293 58.5809 30.5658 57.401 29.8718C52.5424 27.0954 47.2673 25.0826 41.784 23.625C39.0771 22.9309 36.2313 22.3756 33.455 21.9592C30.6092 21.5427 27.8329 21.2651 24.9177 21.1263C22.0719 20.918 19.2262 20.918 16.311 20.9874C14.8535 20.9874 13.4653 21.1263 12.0077 21.1957C10.6195 21.3345 9.16193 21.4733 7.70435 21.6121Z"
        fill="#ddddd5"
      />
      <path
        d="M0 31.1211C1.17995 32.0234 2.29047 32.9258 3.53983 33.7587C4.71978 34.5916 5.96914 35.4245 7.14909 36.188C9.64781 37.715 12.1465 39.1031 14.7841 40.2831C17.4216 41.463 20.1285 42.3653 22.9049 42.8512C24.2931 43.0594 25.6812 43.1982 27 43.1982C28.3881 43.1982 29.7069 43.0594 31.0951 42.7124C33.802 42.1571 36.4396 40.9772 39.4242 40.2137C40.8817 39.7972 42.4781 39.5196 44.0745 39.5196C45.6709 39.4502 47.2673 39.589 48.7943 39.8666C50.3213 40.1443 51.8483 40.6301 53.3059 41.1854C54 41.463 54.7635 41.7407 55.4576 42.0877C56.2211 42.4348 56.9846 42.8512 57.6093 43.2676C58.9974 44.1699 60.1773 45.3499 61.2185 46.4605C62.2596 47.571 63.2313 48.6815 64.1336 49.7227C65.1054 50.7638 66.0771 51.6661 67.1182 52.499C68.1593 53.3319 69.2699 53.9566 70.4499 54.5118C71.6298 55.0671 72.9486 55.4142 74.2674 55.6224L75.239 55.7612L76.2802 55.9C76.9743 55.9694 77.5989 56.0388 78.3624 56.0388C81.2082 56.1777 84.1234 56.1083 86.9691 55.9695C89.8843 55.8306 92.7995 55.6224 95.7841 55.6918C97.3111 55.6918 98.838 55.7612 100.365 56.1082C101.129 56.2471 101.892 56.4553 102.655 56.7329C103.419 57.0106 104.182 57.3576 104.877 57.8435C105.224 58.0517 105.571 58.3293 105.848 58.5375C106.126 58.8152 106.473 59.0928 106.751 59.3011L107.514 59.9952L108.347 60.6892C109.458 61.5916 110.568 62.4939 111.748 63.3268C116.398 66.6584 121.743 69.1571 127.296 70.9617C121.535 69.9206 115.913 67.8383 110.776 64.8538C109.458 64.0903 108.278 63.2573 107.028 62.355L106.126 61.6609L105.224 60.9669C104.946 60.6892 104.668 60.5504 104.391 60.3422C104.113 60.134 103.835 59.9951 103.558 59.8563C101.267 58.607 98.5604 58.4681 95.7146 58.5375C94.3265 58.607 92.8689 58.7458 91.4113 58.8152C89.9537 58.954 88.4961 59.0928 87.0385 59.1622C84.1234 59.3705 81.1388 59.5093 78.1542 59.4399C75.1696 59.4399 71.9074 59.0234 68.9229 57.7741C67.4653 57.1494 66.0077 56.3165 64.7583 55.3448C63.509 54.373 62.329 53.2625 61.2879 52.152C59.2056 49.9309 57.5398 47.6404 55.3882 46.2522C54.9023 45.9052 54.347 45.6275 53.7223 45.3499C53.0977 45.0723 52.473 44.7946 51.7789 44.517C50.4601 44.0312 49.2108 43.6147 47.892 43.3371C45.2545 42.7818 42.617 42.7818 39.91 43.4064C38.5913 43.6841 37.2031 44.1006 35.7455 44.517C34.3573 44.9335 32.8303 45.2805 31.3033 45.5581C28.2493 46.044 25.0565 45.9746 22.072 45.2111C19.0874 44.517 16.311 43.337 13.6735 41.8794C11.036 40.4219 8.60668 38.8255 6.24679 37.0208C4.23393 35.1468 2.01285 33.2728 0 31.1211Z"
        fill="#ddddd5"
      />
      <path
        d="M7.01025 50.2085C9.43956 49.7921 12.0077 49.7921 14.5064 50.0697C17.0051 50.3474 19.5038 50.9026 21.9331 51.8049C24.3624 52.7073 26.6529 54.026 28.6658 55.6224L29.4293 56.2471C29.7069 56.4553 29.9151 56.6635 30.1234 56.9412L30.8174 57.5659C31.0257 57.7741 31.2339 57.9823 31.4421 58.1211C32.275 58.8846 33.2468 59.5093 34.2185 60.0646C36.1619 61.2445 38.383 61.9386 40.6735 62.4939C42.964 62.9797 45.3239 63.2574 47.6838 63.3268C50.1131 63.4656 52.5424 63.4656 54.9717 63.4656C57.401 63.4656 59.8997 63.4656 62.4679 63.535C63.7172 63.6044 64.9666 63.6738 66.2853 63.7432C67.6041 63.882 68.8535 64.0903 70.1028 64.2985C72.6015 64.7844 75.1002 65.4785 77.5295 66.4502C79.8894 67.3525 82.2493 68.5324 84.401 69.7818C86.6221 71.1006 88.7044 72.6275 90.5784 74.2934C91.5501 75.1263 92.4524 76.0286 93.2853 77.0697L93.91 77.7638C94.0488 77.972 94.257 78.1108 94.4653 78.3191C94.8817 78.6661 95.2982 79.0132 95.7841 79.2908C97.7275 80.5401 100.018 81.4425 102.308 82.2754C104.599 83.1083 106.959 83.733 109.388 84.2882C110.568 84.5659 111.817 84.8435 112.997 85.0517C113.622 85.1905 114.177 85.26 114.802 85.3294C115.08 85.3988 115.427 85.3988 115.704 85.3988C115.982 85.3988 116.329 85.4682 116.607 85.3294C116.329 85.4682 115.982 85.4682 115.704 85.5376C115.427 85.5376 115.08 85.607 114.802 85.607C114.177 85.607 113.553 85.607 112.928 85.607C111.679 85.5376 110.429 85.4682 109.18 85.3294C106.681 85.0517 104.252 84.6353 101.823 84.0106C100.573 83.7329 99.3933 83.3859 98.2134 82.9694C97.0334 82.553 95.784 82.0671 94.6735 81.4424C94.1182 81.0954 93.4935 80.7484 92.9383 80.3319C92.6606 80.1237 92.383 79.9155 92.1054 79.6378L91.4807 78.9437C90.6478 78.1108 89.7455 77.3473 88.8432 76.5838C85.0951 73.6687 80.8612 71.3782 76.3496 69.7818C74.1285 69.0183 71.838 68.3936 69.4781 67.9772C68.2982 67.7689 67.1182 67.6301 65.9383 67.4913C64.7583 67.4219 63.5784 67.3525 62.329 67.2831C59.8997 67.2137 57.4704 67.2137 54.9717 67.2137C52.473 67.2137 49.9743 67.1443 47.4755 67.0054C44.9768 66.8666 42.4087 66.5196 39.8406 65.8949C37.3419 65.2702 34.8432 64.2985 32.5527 62.8409C31.4421 62.1468 30.3316 61.3139 29.4293 60.4116C29.1516 60.2034 28.9434 59.9257 28.7352 59.7175L28.1105 59.0234C27.9023 58.8152 27.6941 58.607 27.4858 58.3988L26.8611 57.7741C25.1259 56.1777 23.1825 54.8589 21.1002 53.8178C18.9485 52.7766 16.7275 51.9438 14.3676 51.3191C13.1876 51.0414 12.0077 50.7638 10.7583 50.625C9.43958 50.4168 8.1902 50.2779 7.01025 50.2085Z"
        fill="#ddddd5"
      />
      <path
        d="M2.8457 69.5042C7.07964 68.3936 11.4524 67.7689 15.8251 67.5607C18.0462 67.4913 20.2673 67.4913 22.4884 67.6995C23.5989 67.7689 24.7095 67.9771 25.8894 68.2548C27 68.5324 28.1105 68.8795 29.221 69.3653C30.3316 69.8512 31.4421 70.4758 32.3444 71.3782L32.6915 71.6558L32.9691 71.9335L33.5244 72.4887C33.9408 72.8358 34.3573 73.1828 34.7043 73.5299C36.3007 74.8486 38.0359 76.0285 39.8406 77.0697C41.6452 78.1108 43.5192 79.0131 45.4627 79.6378C47.4061 80.3319 49.3495 80.7483 51.293 80.8872H51.9871C52.1953 80.8872 52.4729 80.8872 52.6812 80.8872L53.3753 80.8178L54.2776 80.7483C55.4575 80.6789 56.568 80.6789 57.748 80.6789C59.9691 80.7484 62.1902 80.9566 64.4113 81.3036C66.6323 81.6507 68.784 81.9977 71.0051 82.553C73.1568 83.0388 75.3084 83.6635 77.4601 84.4964C78.5012 84.9129 79.5424 85.3293 80.5835 85.8846C81.6246 86.4399 82.5964 87.0645 83.4987 87.828C83.7069 88.0363 83.9151 88.2445 84.1928 88.4527L84.748 89.008C84.9562 89.1468 85.095 89.355 85.3033 89.4939L85.928 89.9797C86.6915 90.6044 87.5938 91.1597 88.4961 91.6455C90.3007 92.6866 92.3136 93.4502 94.3958 94.1443C95.437 94.4913 96.4781 94.8383 97.5192 95.116C98.5604 95.3936 99.6015 95.6712 100.712 95.9489C98.4909 95.8795 96.3393 95.6018 94.1876 95.1854C92.0359 94.7689 89.8843 94.1442 87.802 93.3113C86.7609 92.8949 85.7197 92.3396 84.748 91.7149L83.9845 91.2291C83.7763 91.0903 83.4987 90.882 83.2904 90.6738L82.5964 90.1185C82.3881 89.9797 82.2493 89.8409 82.0411 89.7021C80.5141 88.5915 78.5012 87.8281 76.5578 87.2034C72.5321 85.954 68.2981 85.2599 64.1336 84.7741C62.0513 84.5658 59.8997 84.3576 57.8174 84.3576C56.7763 84.3576 55.7352 84.3576 54.7634 84.427L54 84.4964L53.0976 84.5658C52.82 84.5658 52.4729 84.5658 52.1953 84.5658H51.293C46.5038 84.2188 42.131 82.4141 38.2442 80.0542C36.3007 78.8743 34.4961 77.4861 32.7609 76.0285C32.3444 75.6121 31.928 75.265 31.5115 74.8486L30.3315 73.6687C29.7069 73.044 28.9434 72.4887 28.1105 72.0722C26.3753 71.1699 24.3624 70.6147 22.2801 70.1982C20.1979 69.7818 18.1156 69.5736 15.964 69.5042C11.5218 69.0877 7.21845 69.2265 2.8457 69.5042Z"
        fill="#ddddd5"
      />
      <path
        d="M20.4756 89.2162C21.7249 88.7998 23.0437 88.5916 24.3625 88.4527C25.6812 88.3139 27 88.3139 28.3188 88.4527C30.9563 88.661 33.5938 89.2857 36.1619 90.188C38.6607 91.0903 41.09 92.409 43.311 93.8666L44.0746 94.3525C44.3522 94.4913 44.5604 94.6995 44.838 94.8384C45.1157 94.9772 45.3239 95.116 45.6015 95.2548L46.4344 95.6712C47.545 96.2265 48.5861 96.7124 49.766 97.1288C54.347 98.8641 59.275 99.7664 64.3419 100.46C66.8406 100.807 69.4087 101.085 71.9768 101.363C73.2262 101.502 74.545 101.64 75.7943 101.849C77.0437 101.987 78.3624 102.196 79.6118 102.543C77.0437 102.682 74.4756 102.959 71.9074 103.167C69.3393 103.306 66.7018 103.376 64.1337 103.306C58.928 103.167 53.6529 102.473 48.5167 100.599C47.2673 100.183 46.018 99.6276 44.7686 99.0029C43.5193 98.3782 42.3393 97.6147 41.2982 96.8512C39.2854 95.3936 37.2031 94.0748 34.982 93.0337C32.7609 91.9232 30.4704 91.0209 28.0411 90.3962C25.6118 89.7715 23.1131 89.2856 20.4756 89.2162Z"
        fill="#ddddd5"
      />
      <path
        d="M35.3291 4.81525C36.2314 4.95406 37.0643 5.09286 37.9666 5.23168L40.6042 5.71755C42.3394 6.0646 44.0746 6.41162 45.8098 6.82807C49.2803 7.66098 52.7507 8.63271 56.1517 9.74325C59.5528 10.8538 62.8844 12.1032 66.216 13.4913C67.8818 14.1854 69.4782 14.9489 71.144 15.7818L72.324 16.4065L73.5039 17.0312L74.0592 17.3088C74.2674 17.3782 74.4062 17.517 74.6145 17.5864C74.9615 17.7947 75.378 17.9335 75.725 18.1417C78.779 19.5299 82.0412 20.571 85.3728 21.2651C88.7739 22.0286 92.1749 22.5145 95.7147 23.0003C99.1851 23.4862 102.794 23.972 106.265 24.805C108 25.2214 109.805 25.7073 111.401 26.5402C113.067 27.3037 114.663 28.3448 115.704 29.733C115.01 29.1777 114.247 28.6918 113.483 28.3448C112.72 27.9977 111.887 27.6507 111.054 27.4425C109.388 26.9566 107.653 26.7484 105.918 26.5402C102.447 26.1931 98.9075 26.0543 95.3677 25.8461C91.8278 25.6379 88.2186 25.3602 84.6787 24.6661C82.8741 24.3885 81.0695 23.972 79.3343 23.4168C77.5296 22.9309 75.7944 22.2368 74.1286 21.4733C73.7122 21.2651 73.2957 21.0569 72.8793 20.8486C72.671 20.7098 72.4628 20.6404 72.2546 20.5016L71.6299 20.1546L70.5193 19.5299L69.3394 18.9052C67.8124 18.1417 66.216 17.3088 64.689 16.6147C61.4962 15.1571 58.3034 13.769 55.0412 12.4502C48.5862 9.88208 41.9923 7.38337 35.3291 4.81525Z"
        fill="#ddddd5"
      />
      <path
        d="M62.1208 0.234247C63.8561 0.0260211 65.5219 -0.0433791 67.2571 0.0260296C68.9229 0.0954383 70.6581 0.234281 72.3239 0.442507C75.7249 0.85896 79.0566 1.62245 82.2494 2.73299C85.5116 3.77412 88.635 5.23171 91.5501 7.03634C93.0077 7.93865 94.3959 8.97978 95.7147 10.1597C96.964 11.3397 98.144 12.589 99.1157 14.0466C97.6581 13.2137 96.2005 12.3808 94.6735 11.6867C93.2159 10.9232 91.689 10.2985 90.2314 9.67386C87.2468 8.4245 84.1928 7.31395 81.0694 6.27282C77.946 5.23169 74.8226 4.25995 71.6992 3.35764C68.5064 2.31651 65.3831 1.34479 62.1208 0.234247Z"
        fill="#ddddd5"
      />
      <path
        d="M39.4241 106.707C41.1593 107.054 42.7557 107.401 44.2827 107.818C45.8097 108.165 47.2673 108.581 48.7943 108.998C49.1413 109.067 49.5577 109.206 49.9048 109.275C50.2518 109.414 50.6683 109.484 51.0153 109.553C51.3624 109.622 51.7788 109.761 52.1259 109.9C52.4729 109.969 52.8893 110.108 53.2364 110.247C53.4446 110.317 53.5835 110.386 53.7917 110.455C53.9999 110.525 54.2081 110.594 54.347 110.664C54.7634 110.802 55.1105 110.941 55.5269 111.08C56.2904 111.358 57.1233 111.635 57.9562 112.052C57.5398 112.26 57.1233 112.399 56.7068 112.538C56.2904 112.676 55.8739 112.815 55.4575 112.885C55.041 112.954 54.6246 113.023 54.2081 113.093C53.7917 113.162 53.3752 113.162 52.8893 113.162C52.4729 113.162 52.0565 113.162 51.5706 113.162C51.1542 113.162 50.7377 113.093 50.2518 113.023L49.6272 112.954C49.4189 112.954 49.2107 112.885 49.0025 112.815C48.586 112.746 48.1696 112.607 47.7531 112.538C46.0873 112.052 44.4909 111.358 43.0333 110.455C42.6863 110.247 42.3392 109.969 41.9922 109.692C41.6452 109.414 41.2981 109.137 41.0205 108.79C40.3958 108.234 39.8405 107.54 39.4241 106.707Z"
        fill="#ddddd5"
      />
    </svg>
  ),
  listTopics2: (props: IconProps) => (
    <svg
      width="135"
      height="129"
      viewBox="0 0 135 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="absolute top-2/3 -left-24 scale-110 -z-10"
    >
      <path
        d="M51.1576 51.5641C51.1576 51.5641 31.1525 14.7751 51.1576 9.35C71.1626 3.92489 71.1626 41.0529 76.5877 44.7827C82.0129 48.3429 110.664 21.2174 117.785 26.6426C125.075 32.0677 145.758 61.058 127.957 62.9229C110.156 64.7878 83.5387 62.7534 88.6248 76.8248C93.7108 90.8961 95.067 110.901 82.5215 110.393C69.8064 109.884 59.4648 90.0484 59.4648 84.1147C59.4648 78.181 44.0372 101.407 29.2876 100.39C14.5381 99.712 3.00972 66.4831 51.1576 51.5641Z"
        fill="#e96623"
      />
      <path
        d="M78.9611 31.22C78.9611 31.22 82.1822 0.873375 90.3199 0.025702C98.288 -0.991506 88.7941 28.5075 78.9611 31.22Z"
        fill="#e96623"
      />
      <path
        d="M51.1576 108.358C40.3074 109.545 60.3125 134.467 65.229 127.346C70.315 120.565 58.4476 107.68 51.1576 108.358Z"
        fill="#e96623"
      />
      <path
        d="M29.2875 38.849C29.2875 38.849 -2.24592 22.5737 0.127566 38.849C2.33152 55.2939 22.1671 53.9376 29.2875 38.849Z"
        fill="#e96623"
      />
      <path
        d="M106.426 76.8248C106.426 76.8248 119.31 70.5521 116.598 81.4023C113.716 92.422 106.426 76.8248 106.426 76.8248Z"
        fill="#e96623"
      />
    </svg>
  ),
  boxBg: (props: IconProps) => (
    <svg
      width="135"
      height="112"
      viewBox="0 0 135 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.8505 31.8382C31.8505 31.8382 36.0494 24.0547 44.1401 26.9223C52.2307 29.6875 65.2372 36.0371 61.3455 38.1877C57.4538 40.3384 43.8328 52.9352 38.5074 53.6521C33.1819 54.369 27.6516 36.0371 31.8505 31.8382Z"
        fill="#7F7C6E"
      />
      <path
        d="M74.0447 23.0306C74.0447 23.0306 80.7015 13.1989 85.6173 13.9158C90.5331 14.6327 105.69 23.5426 106.407 26.3078C107.124 29.0729 87.3584 36.4467 83.1594 36.4467C78.9605 36.4467 71.894 29.3802 74.0447 23.0306Z"
        fill="#7F7C6E"
      />
      <path
        d="M57.1465 63.4837C57.1465 63.4837 57.1465 51.5014 62.0623 50.0676C66.9781 48.6338 81.1112 50.4772 83.8763 53.652C86.6415 56.8268 70.1529 66.6585 57.1465 63.4837Z"
        fill="#7F7C6E"
      />
      <path
        d="M38.5072 79.8698C38.5072 79.8698 43.4231 70.8574 51.104 72.0864C58.8874 73.4177 73.6349 77.6167 73.6349 77.6167C73.6349 77.6167 56.1222 84.9904 51.5137 87.7556C46.9051 90.6231 37.8927 85.9121 38.5072 79.8698Z"
        fill="#7F7C6E"
      />
      <path
        d="M98.6238 46.5856C98.6238 46.5856 109.889 41.6697 114.498 42.3866C119.106 43.1035 128.938 49.6579 128.938 49.6579C128.938 49.6579 104.973 60.1041 100.774 56.9293C96.5755 53.6521 98.6238 46.5856 98.6238 46.5856Z"
        fill="#7F7C6E"
      />
      <path
        d="M85.3101 74.4419C85.3101 74.4419 86.027 64.303 90.0211 65.1223C94.0152 65.9416 122.179 66.1464 117.98 68.6043C98.1117 80.2794 85.3101 74.4419 85.3101 74.4419Z"
        fill="#7F7C6E"
      />
      <path
        d="M48.339 5.41549C49.0559 4.59618 51.1041 -1.95824 58.8875 1.5238C66.6709 5.00585 70.665 9.3072 70.665 9.3072C70.665 9.3072 60.6286 16.6809 56.02 16.6809C51.5138 16.6809 44.3449 9.71684 48.339 5.41549Z"
        fill="#7F7C6E"
      />
      <path
        d="M12.3919 49.6579C12.3919 49.6579 5.22306 50.5797 3.48204 53.652C1.6386 56.7244 -1.9459 59.2848 1.33132 61.333C4.60854 63.3813 10.1388 61.7427 14.645 62.562C19.2536 63.4837 26.0129 61.5379 24.2719 56.8269C22.6333 52.2183 21.1995 48.2242 12.3919 49.6579Z"
        fill="#7F7C6E"
      />
      <path
        d="M22.9404 18.2171C22.9404 18.2171 22.5308 18.2171 21.8139 18.1147C19.0487 18.0123 12.4943 18.1147 12.1871 22.2113C11.7774 27.3319 19.2536 28.0488 22.9404 27.1271C26.6273 26.2054 32.5673 22.5185 31.1335 20.8799C29.6997 19.3437 22.9404 18.2171 22.9404 18.2171Z"
        fill="#7F7C6E"
      />
      <path
        d="M73.6349 91.3401C73.6349 91.3401 81.828 86.0146 85.31 88.6773C88.792 91.3401 86.539 97.8945 82.1352 97.8945C77.7315 97.8945 70.665 96.8704 73.6349 91.3401Z"
        fill="#7F7C6E"
      />
      <path
        d="M124.125 74.1347C130.269 75.0564 136.517 77.924 134.673 82.0205C132.83 86.117 122.588 88.6774 116.751 84.4784C111.016 80.2795 120.847 73.6226 124.125 74.1347Z"
        fill="#7F7C6E"
      />
      <path
        d="M18.2295 79.7674C14.9523 81.8157 7.88582 84.4784 12.2896 88.5749C16.6933 92.6715 28.3684 82.7374 28.7781 78.5385C29.1877 74.4419 18.2295 79.7674 18.2295 79.7674Z"
        fill="#7F7C6E"
      />
      <path
        d="M38.5073 97.7921C33.3867 98.2017 42.6039 110.901 47.2124 111.311C51.821 111.72 52.9476 96.768 38.5073 97.7921Z"
        fill="#7F7C6E"
      />
    </svg>
  ),
};