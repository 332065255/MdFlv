import flvparse from './src/flvParse.js';

var flvParse=new flvparse();

window.CPU={
    makeFlv:function(uint8,tags,index){
        flvParse.probe(uint8);
        flvParse.setFlv(uint8,tags,index)
    },
    getFlv:function(){
        var size=0;
       for(var i=0;i<flvParse.arrTag.length;i++){
            size=size+11+flvParse.arrTag[i].body.length+4;
       } 
        console.log(size+9+4);
        var uint8=new Uint8Array(size+9+4);
        var index=0;
        uint8.set([70,76,86,1,5,0,0,0,9,0,0,0,0],0)
        index+=13
        for(i=0;i<flvParse.arrTag.length;i++){
           uint8.set([flvParse.arrTag[i].tagType],index);
           index++;

           uint8.set(flvParse.arrTag[i].dataSize,index);
           index+=3;

           uint8.set(flvParse.arrTag[i].Timestamp,index);
           index+=4;

           uint8.set(flvParse.arrTag[i].StreamID,index);
           index+=3;

           uint8.set(flvParse.arrTag[i].body,index);
           index+=flvParse.arrTag[i].body.length;

           uint8.set(flvParse.arrTag[i].size,index);
           index+=4;
       }
       return uint8;
    }
}