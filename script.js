let wrap = document.body;
        let ReSet = document.querySelector(".reset")
        let UnDo = document.querySelector(".undo")
        let ReDo = document.querySelector(".redo")
        let arr = [];
        let arr2 = [];
         
        wrap.addEventListener('click',function (event){
            if(event.target.nodeName==="BUTTON") return
            UnDo.disabled = false;
            ReSet.disabled = false;
             if(arr.length>0){
                UnDo.style.opacity="1"
                ReSet.style.opacity="1"

             }

            let x =event.clientX;
            let y =event.clientY;

            let para = document.createElement("p")
            para.classList.add('dot')

            para.style.left =`${x -5}px`
            para.style.top =`${y -5}px`


            wrap.append(para)


            arr.push(para)
            // console.log(arr);
          
        })

           
        ReSet.addEventListener('click',function (e){
            e.preventDefault()
            // para.innerHTML=""
            arr.forEach(para => wrap.removeChild(para));
            
            // console.log(arr);
            
            arr=[];
            arr2=[];
            UnDo.disabled = true;
            ReSet.disabled = true;
            ReDo.disabled = true;

        })

                  
        UnDo.addEventListener('click',function (e){
            e.preventDefault()
            ReDo.disabled = false;
            // ReDo.style.opacity="1"
            let value = arr.pop()
            arr2.push(value)
            wrap.removeChild(value)
            })
      
            ReDo.addEventListener('click',function(e){
                e.preventDefault()

               let value2 = arr2.pop()
               arr.push(value2)
               wrap.append(value2)
               if(arr2.length===0){
            ReDo.disabled = true;
                   
            }
                 
            })
