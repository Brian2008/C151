AFRAME.registerComponent("move-box",{
    schema:{
        moveX:{type:"number",default:1}
},
tick: function(){
    this.data.moveX=this.data.moveX+0.01 //Move direction X by 0.01
    var pos = this.el.getAttribute("position") //Gets the current position
    pos.x=this.data.moveX //Updates the position
    this.el.setAttribute("positon",{ //Sets the attributes for the Box
        x:pos.x,
        y:pos.y,
        z:pos.z
    })
            }
    }
)