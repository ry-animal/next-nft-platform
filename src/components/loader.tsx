interface HeaderProps {
  title?: string;
}

export const Loader = (props: HeaderProps) => {
  return (
    <div className=" max-h-fit max-w-fit">
      <svg
        width="100%"
        viewBox="50 0 250 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle id="flash" cx="79.5" cy="26.5" r="15.5" fill="#bbbbbb" />
        <rect x="60" y="10" width="19.85" height="32" fill="#ffffff" />
        <path
          id="beak"
          d="M64.7662 20.4021C64.1178 22.3919 63.7866 24.5101 63.7899 26.6466C63.79 28.0824 63.9386 29.5126 64.2322 30.9045L74.2923 25.4818L64.7662 20.4021Z"
          fill="#bbbbbb"
        />

        <path
          d="M79.9183 35.3682V32.2548H94.1475C94.9103 30.3486 95.3004 28.3128 95.2965 26.2586C95.2512 19.2756 90.6598 13.1442 83.9889 11.1584C77.318 9.17255 70.1379 11.7998 66.3059 17.6285L79.9667 23.7582V26.6288L65.3565 33.1834C67.8382 38.1819 72.7467 41.5112 78.2936 41.9584C83.8404 42.4055 89.2155 39.9051 92.4604 35.3682H79.9183Z"
          fill="#bbbbbb"
        />
      </svg>
    </div>
  );
};

/*
body
  text-align: center



#flash
  animation: flash 0.5s ease-in-out infinite alternate

@keyframes flash
  from 
    opacity: 1.0

  to
    opacity: 0.0

    
    
    
#loading-spinner
  animation: loading-spinner 2s ease-in-out infinite alternate

@keyframes loading-spinner
  from 
    transform: translate(00px,0)

  to
    transform: translate(0px,0)


<html>
  
  <head>
    <title>Rotating Loading Icon with Gradient</title>
  </head>
  
  <body>


    
  </body>
</html>

*/
