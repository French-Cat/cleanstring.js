if(typeof String.prototype.replaceAll=='undefined'){String.prototype.replaceAll=(match,replace)=>{return this.replace(new RegExp(match,'g'),()=>replace)}}
function clean(a){const b=a.replaceAll("<","&lt"),c=b.replaceAll(">","&gt"),d=c.replaceAll("≤","&le"),e=d.replaceAll("≥","&ge");return e}module.exports=clean;
