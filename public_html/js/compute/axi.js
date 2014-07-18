if(typeof compute==="undefined"){compute={};}
if(typeof compute.axi==="undefined"){compute.axi={};}
$.extend(compute.axi,{
    zmax:0,
    firstcycle:true,
    transform:function(space,full){
        var array=space.spacearr;
        var zm=this.zmax;
        if(space.ncv===2){
            var len=array.length;
            if(this.firstcycle&&control.settings.axi_auto.get()){
                for (var i=0;i<len;i++){
                    if(array[i]>zm){
                        this.setZmax(array[i]);
                        zm=array[i];
                    }
                }
            }
            var nar;
            if(full){
                nar=new Float32Array(len);
                for (var i=0;i<len;i++){
                    nar[i]=array[i];
                }
            }else{
                nar=new Uint8Array(len);
                for (var i=0;i<len;i++){
                    nar[i]=array[i]/zm*255;
                }
            }
            return nar;
        }else{
            manage.console.error("Axi: Only 2D spectra implemented");
        }
    },
    getMin:function(xaxi){
        var cv=this.getCVindex(xaxi);
        return compute.sum_hill.mins[cv];
    },
    getMax:function(xaxi){
        var cv=this.getCVindex(xaxi);
        return compute.sum_hill.maxs[cv];
    },
    getName:function(xaxi){
        var cv=this.getCVindex(xaxi);
        return compute.sum_hill.params.cvs[cv].name;
    },
    getCVindex:function(xaxi){
        if(xaxi){return control.settings.axi_x.get();
        }else{return control.settings.axi_y.get();}
    },
    setZmax:function(zm){
        this.zmax=zm;
        view.axi.needRedraw=true;
        //manage.console.debug("Zmax set to "+zm);
    },
    reset:function(){
        this.zmax=0;
        this.firstcycle=true;
    }
});