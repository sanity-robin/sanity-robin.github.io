(function(){
  function encodeWav(buffer){const channels=2,length=buffer.length*channels*2,out=new ArrayBuffer(44+length),v=new DataView(out);const str=(o,s)=>[...s].forEach((c,i)=>v.setUint8(o+i,c.charCodeAt(0)));str(0,'RIFF');v.setUint32(4,36+length,true);str(8,'WAVE');str(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,channels,true);v.setUint32(24,44100,true);v.setUint32(28,44100*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,length,true);const l=buffer.getChannelData(0),r=buffer.getChannelData(1);let o=44;for(let i=0;i<buffer.length;i++){for(const x of [l[i],r[i]]){const s=Math.max(-1,Math.min(1,x));v.setInt16(o,s<0?s*32768:s*32767,true);o+=2}}return new Blob([out],{type:'audio/wav'})}
  function download(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
  window.WavExporter={encodeWav,download};
})();
