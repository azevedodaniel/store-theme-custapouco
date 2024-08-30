export default function Newsletter() {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(window._mtmReady){ 
           console.error('Connected sites script already loaded. You might have it dupplicated.'); 
          } else { 
          window._mtmReady=true; 
          var _mtm = window._mtm = window._mtm || [];
          _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src='https://egoi.site/1636609_www.custapoucoseduzir.com.br.js'; 
          s.parentNode.insertBefore(g,s);
          }`,
          }}
        ></script>
        <div className="eg-embed-1ece7zBP"></div>
      </>
    )
  }