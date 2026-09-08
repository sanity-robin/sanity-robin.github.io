(function(){
  const L=(name,wave,startFrequency,endFrequency,duration,volume,startTime=0,fx={})=>({id:crypto.randomUUID(),name,enabled:true,wave,startFrequency,endFrequency,duration,volume,startTime,attack:.005,decay:.08,sustain:.55,release:.12,pitchSweep:endFrequency-startFrequency,delay:0,reverb:.08,distortion:0,lowpass:12000,highpass:20,pan:0,...fx});
  window.PulsePresets={
    "先バレ":{category:"ALERT",layers:[L("SUB IMPACT","sine",110,48,.22,.72,0,{distortion:12,lowpass:900}),L("RISING ARC","sawtooth",260,2100,.28,.35,.04,{delay:.06}),L("NEON TICK","square",3900,6200,.07,.2,.23),L("TAIL","triangle",720,320,.38,.2,.27,{reverb:.48})]},
    "キュイン":{category:"HIGH RISE",layers:[L("GLASS RISE","sine",1200,7200,.33,.34,0,{delay:.08,reverb:.22}),L("HARMONIC","triangle",1800,9100,.24,.18,.05),L("SPARK 1","square",5200,6900,.06,.12,.24),L("SPARK 2","sine",6400,9100,.08,.1,.33)]},
    "衝撃":{category:"IMPACT",layers:[L("NOISE HIT","noise",140,45,.16,.62,0,{distortion:34,lowpass:1900}),L("SUB DROP","sine",150,34,.42,.78,0,{lowpass:500}),L("METAL SNAP","sawtooth",1200,210,.12,.24,.015,{distortion:22}),L("ROOM","noise",800,180,.5,.1,.08,{reverb:.65,lowpass:2400})]},
    "警報":{category:"WARNING",layers:[L("ALARM A","square",740,740,.16,.3,0),L("ALARM B","square",1040,1040,.16,.28,.18),L("ALARM A2","square",740,740,.16,.3,.36),L("ALARM B2","square",1040,1040,.16,.28,.54)]},
    "プレミアム":{category:"CELEBRATE",layers:[L("FANFARE","triangle",520,2080,.4,.28,0,{reverb:.35}),L("SHIMMER","sine",2500,8800,.55,.18,.08,{delay:.11,reverb:.5}),L("CHIME A","sine",3136,3136,.32,.18,.34,{reverb:.65}),L("CHIME B","sine",4186,4186,.4,.16,.48,{reverb:.7})]},
    "8BIT":{category:"RETRO",layers:[L("CHIP LEAD","square",330,1320,.22,.25,0),L("ARPEGGIO 1","square",660,660,.09,.2,.24),L("ARPEGGIO 2","square",990,990,.09,.2,.34),L("ARPEGGIO 3","square",1320,1320,.16,.2,.44)]},
    "フラッシュ":{category:"CYBER",layers:[L("WHITE BURST","noise",5000,700,.1,.28,0,{highpass:500,reverb:.2}),L("LASER","sawtooth",5600,420,.18,.24,0,{delay:.04}),L("CLICK","square",8200,2400,.035,.13,.02),L("AFTERGLOW","sine",1800,700,.3,.12,.12,{reverb:.6})]},
    "低音バイブ風":{category:"SUB BASS",layers:[L("VIBE CORE","sine",82,38,.58,.74,0,{distortion:8,lowpass:240}),L("RUMBLE","noise",120,42,.48,.2,0,{lowpass:260}),L("PULSE","triangle",64,48,.22,.3,.18,{distortion:10}),L("BODY","sine",46,34,.48,.32,.35,{lowpass:140})]}
  };
  window.makeLayer=L;
})();
