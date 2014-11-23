/** @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
* Copyright (C) 2014  Petr Hošek
*/
if(typeof draw==="undefined"){draw={};}
if(typeof draw.liner==="undefined"){draw.liner={};}
$.extend(draw.liner,{
    $can:null,
    engine:"liner",
    init:function(){
        var can=$("<canvas>").attr({id:"main_can_liner"}).addClass("main_can");
        this.$can=can;
        this.ctx=this.$can[0].getContext("2d");
        if(this.ctx){
            this.inited=true;
        }else{
            this.inited=false;
        }
    },
    isInited:function(){
        return this.inited;
    },
    draw:function(drawable,zmax){
        /*if(!this.inited){
            this.init();
        }*/
        if(!zmax){zmax=1;}
        var height=this.$can.height();
        var width=this.$can.width();
        var ctx=this.ctx;
        ctx.clearRect(0,0,width,height);
        ctx.beginPath();
        ctx.moveTo(0,height);
        ctx.strokeStyle="black";
        ctx.fillStyle="red";
        var resol=control.settings.resol.get();
        var step=width/resol;
        for(var i=0;i<resol;i++){
            ctx.lineTo(i*step,1+drawable[i]*(height-5)/zmax);
        }
        ctx.lineTo(width,0);
        ctx.lineTo(width,height);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
});
// @license-end