interface HeaderProps {
  title?: string;
}

export const LoaderBlack = (props: HeaderProps) => {
  return (
    <div className=" flex h-full w-full flex-col ">
      {props.title && (
        <div className=" flex h-full w-full flex-col ">
          <div className="flex w-full flex-1 flex-row flex-wrap font-mono text-lg font-medium text-[#52B157]">
            <div>
              {"> "} {props.title}
            </div>
            <div className="flash mx-1 font-mono text-xl  text-[#52B157]">
              _
            </div>
          </div>
        </div>
      )}
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
