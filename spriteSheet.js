function spriteSheet(img,row,col,x,y,id){
 let frameWidth=img.width/row;
 let frameHeight=img.height/3;
 let frameRow=idToMatrix(id,row,col)[0]
 let frameCol=idToMatrix(id,row,col)[1]
 ctx.drawImage(img, frameRow*frameWidth, frameCol*frameHeight, frameWidth, frameHeight, x, y-frameHeight, frameWidth, frameHeight);
}
function idToMatrix(id,x,y){
    for(let i=0;i<x/y;i++){
        if(x*(i+1)>=id){
            return [i,id%x];
        }
    }
    
}
