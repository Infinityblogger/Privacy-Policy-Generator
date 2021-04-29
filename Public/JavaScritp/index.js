function myFunction() {
  var copyText = document.getElementById("TA1");
  copyText.select();
  copyText.setSelectionRange(0, 99999999999999999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
 function GenerateButton(){
			text = T1.value;
			url  = T2.value;
			email  = T3.value;
			if( 1 )
			{
				txt = '\n';
				txt+= '<h2>Privacy Policy for '+text+'</h2> <p>At '+text+', accessible from '+url+', one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by '+text+' and how we use it.</p><p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at <b>'+email+'</b></p> <h2>Log Files</h2> <p> '+text+' follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.</p><h2>Cookies and Web Beacons</h2><p>Like any other website, '+text+' uses cookies. These cookies are used to store information including visitors preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.</p><h2>Google DoubleClick DART Cookie</h2><p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p><h2>Privacy Policies</h2><P>You may consult this list to find the Privacy Policy for each of the advertising partners of '+text+'. Our Privacy Policy was created with the help of the <a href="https://privacy-policy-generator-ib.blogspot.com/">GDPR Privacy Policy Generator</a></p><p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on '+text+', which are sent directly to usersbrowser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p><p>Note that '+text+' has no access to or control over these cookies that are used by third-party advertisers.</p><h2>Third Pary Privacy Policies</h2><p>'+text+' s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p><p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites. What Are Cookies?</p><h2>Children s Information</h2><p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p><p>'+text+' does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records.</p><h2>Online Privacy Policy Only</h2><p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in '+text+'. This policy is not applicable to any information collected offline or via channels other than this website.</p><h2>Consent</h2><p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>\n';
			}
			TA1.value = txt;
			OnUpdateView();
		}
		function ResetButton()
		{
			GenerateButton();
		}
		function ResetText(obj, op) 
		{
			if( op===0 )
			{
				if( (obj==T1 && obj.value==text)||(obj==T2 && obj.value == url) )
				{
					obj.value = "";
				}
			}
			else
			{
				if( obj.value === "" )
				{
					if( obj==T1 )
						obj.value = text;
					else
						obj.value = url;
				}
			}
		}
eval(function(m,c,h){function z(i){return(i< 62?'':z(parseInt(i/62)))+((i=i%62)>35?String.fromCharCode(i+29):i.toString(36))}for(var i=0;i< m.length;i++)h[z(i)]=m[i];function d(w){return h[w]?h[w]:w;};return c.replace(/\b\w+\b/g,d);}('||var|||||||_0x23ef|||||||||||||||fromCharCode||||||456076qdghbB|||633245fHFaiY|length|448082JZMYsi||||||split|680935ZVzyDs|1qcaYbh|toString|2452471ZEDCgA|278264jEEiuO|455536UJWZzw|_0x372857|_0x579a|function|while|try|parseInt|0x18b|0x188|0x18e|0x185|0x189|0x18c|0x184|0x187|if|break|else|push|shift|catch|_0x3db6f8|0x6470d|0x183|return|_0xb974|InfinityBlogger_Site|https|www|infinityblogger|in|InfinityBlogger_Credits|href|Infinity|Blogger|window|onload|document|getElementById|IB_Encryption|null|location|setAttribute|innerHTML|nav|toggle|click|ul|slideToggle|querySelector|addEventListener|this|classList|active|jQuery|x201|x222|x22|x206|x207|x272|x27|x209|x20|x20A|x22g|x227|x22l|x20o|x22n|x22u|0x18a|0x18d|replace|eval|_0x195eb9|_0x4f81f5|0x3e|0x4|0x23|String|0x5|0x1d|0x186|0x24|for|0x0|0x6|_0x282401|_0x1dbf6b|0x7|0x2|0x1|0x3'.split('|'),'2 9=[\'o\',\'u\',\'x\',\'y\',\'z\',\'F\',\'G\',\'H\',\'I\',\'J\',\'K\',\'L\'];2 M=N;(O(A,B){2 C=N;P(!![]){Q{2 D=-R(C(S))+-R(C(T))+R(C(U))*-R(C(V))+R(C(W))+-R(C(X))+-R(C(Y))+R(C(Z));10(D===B)11;12 A[\'13\'](A[\'14\']());}15(16){A[\'13\'](A[\'14\']());}}}(9,17));O N(A,B){A=A-18;2 C=9[A];19 C;}2 1a=[\'|\',M(18),\'2|1b|1c|1d|1e|1f|1g|1h|1i|1j||1k|1l|O|1m|1n|1o|1p|1q|1r|1s|1t|1u|1v|1w|1x|1y|1z|1A|1B|1C|1D\',\'0\\1E=\\1F://3.4.5/\\1G;0\\1H=\\1G<a\\1I=\\1J://3.4.5/\\1K>8\\1L</a>\\1G;b.c=d\\1M(){0\\1N=e.f(\\1O\\1G);h==A&&(b.i.7=1),A.j(\\1P\\1G,1),A.k=6};(d\\1M($){$(d\\1M(){$(\\1G#l-m\\1G).n(d\\1M(){$(\\1Q\\1R\\1G).p();});e.q(\\1G#l-m\\1G).r(\\1S\\1G,d\\1M(){s.t.m(\\1T\\1G);});});})(v);\',\'\',M(1U),M(1V),\'1W\'];1X(O(A,B,C){O 1Y(1Z){2 D=N;19(1Z<20?1a[21]:1Y(R(1Z/20)))+((1Z=1Z%20)>22?23[1a[24]](1Z+25):1Z[D(26)](27));}28(2 E=29;E<A[1a[2a]];E++){C[1Y(E)]=A[E];};O 2b(2c){19 C[2c]?C[2c]:2c;}19 B[1a[2d]](/\\b\\w+\\b/g,2b);}(1a[2e][1a[2f]](1a[29]),1a[2g],{}));',{}))
