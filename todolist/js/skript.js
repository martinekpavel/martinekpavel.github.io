document.addEventListener('DOMContentLoaded',
    () => {

        document.querySelector('#addBtn').onclick = newElement;
        document.querySelector('#error').onclick = errorOff;

        let myNodelist = document.querySelectorAll('#myUL li');
        
        myNodelist.forEach(item => {
            updateList(item);
        });

        function updateList(listItem){
            let span = document.createElement("span");  // <span></span>
            let txt = document.createTextNode("\u00D7");
            span.className = "close"; // <span class="close"></span>
            span.onclick = function() {
                this.parentElement.style.display = "none";
            }
            span.appendChild(txt); // <span class="close">\u00D7</span>
            listItem.appendChild(span);
            listItem.onclick = function() {
                this.classList.toggle("checked");
            }
        }
      
        function newElement() {
            let myInput = document.querySelector("#myInput").value;
            if (myInput.length > 0) {
                let li = document.createElement("li");
                li.innerHTML = myInput;
                document.querySelector("#myUL").appendChild(li);
                document.querySelector('#myInput').value = "";
                updateList(li);

            } else {
                errorOn();
            };
            };

        function errorOn() {
            document.getElementById("error").style.display = "flex";
        }

        function errorOff(){
            document.getElementById("error").style.display = "none";
        }

    });
