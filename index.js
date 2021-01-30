const inputs = document.querySelectorAll('.controls input');
console.log(inputs)




function  handleUpdate(){
    const set = this.dataset.sizing || "" ;
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${set}` )
    
  };

  inputs.forEach(input => input.addEventListener("change", handleUpdate));
  inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));