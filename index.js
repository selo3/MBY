// loader screen 

let loader = document.getElementById("loader-wrapper")

window.addEventListener("load" , ()=>{
  
  loader.style.display = "none" ;
})

document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

window.addEventListener("scroll" , function(){
  let header=document.querySelector("nav");
  header.classList.toggle("sticky" , window.scrollY > window.scrollY )
});




    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);  

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        // el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  });
  const preScroll =document.querySelector(".navbar-menu") ;
  window.addEventListener("scroll" ,() => {
    if(preScroll.classList = 'navbar-menu'){
      preScroll.classList.remove;

    }
    else{
      preScroll.classList = 'navbar-menu'
    }
  })


  
  
  
  
  
  
  const translations={
    en:{
      // NAVBAR WORDS 

        home:"Home",
        about:"About",
        contact:"Contact Us",
        language:"language",
        en:"",
        projects:"projects",
        Articles:"Articles",


        // HERO SECTION IN HOME PAGE 
        typing1:"Tomorrow’s technologies, built today for a better world",
        typing2:"Technology outlines the future, step by step",
        typing3:"Towards an advanced future with practical and smart solutions",
        typing4:"Innovations that touch reality, for a more evolved daily life",
        Ourvision:"Our vision ",
        Ourvisionspan:"for tomorrow",
        TitleArticles:"The Made By Vision Blog",
        SubtitleArticles:"your source of great content",
        seemorecard:"see more...",
        ontime:"on time",
        ontime1:"We appreciate your time",
        teamwork:"team work",
        teamwork1:"Evolves for you",
        Creativesupply:"Creative supply",
        Creativesupply1:"Solutions that develop your business",
        Renewedideas:"Renewed ideas",
        Renewedideas1:"Distinguish you from others",
       


        // Service Worker 

        Services:"Services",
        service4:"Ensuring Quality",
        service5:"Programming",
        service6:"Testing",
        service7:"Deployment",
        service8:"User Training",
        service9:"Post-Deployment Support",
        service10:"Maintenance",
        service11:"Software Development",
        select_now:"Select Now",
        show_more:"Show More",
        showAll:"show All",
        offering:"what we're offering",
        Built_Service:"Services Built Specifically for your Business",
        
        // service one 
          service1:"Analysis and Design",
          service1_2:"Analyzing business requirements and designing an efficient solution that meets client needs",
          service1_3:": Providing tailored technological solutions that reflect the client's vision and improving operational efficiency",
          service1_4:"We are here to understand your vision and turn it into reality. Analysis involves exploring the finest details of your needs and requirements, analyzing every aspect of your business. Then comes the design phase to turn these requirements into a tangible execution plan, including user interface design and defining key functionalities.",
          service1_5:"Benefits of the Application:",
          service1_6:"Enhanced Productivity",
          service1_7:"Precise analysis sets the foundation for improving work efficiency and increasing productivity",
          service1_8:"Achieving Effective Communication",
          service1_9:"Design helps in creating an effective user interface, enhancing user interaction with the application positively",
          service1_11:"Meeting Business Objectives",
          service1_12:"Analysis and design ensure the efficient achievement of your business objectives, contributing to the project's success",
  
  
          
          
          // service tow 
          service2:"Offering Appropriate Solutions  ",
          service2_2:"Presenting unique solutions tailored to business requirements and utilized technologies",
          service2_3:"Supporting clients with modern technologies and solutions to advance their business",
          service2_4:"We understand that every organization has unique needs, and that's why we provide customized solutions that align with the nature of your business. We start by comprehending the intricacies of your operations and requirements, offering tailored plans based on your specific goals and challenges",
          service2_5:"Impact of the Application",
          service2_6:"Achieving Better Integration",
          service2_7:"Offering customized solutions helps enhance the integration of work systems within the organization, achieving more efficient workflows",
          service2_8:"Improving User Experience",
          service2_9:"Opting for suitable solutions allows for an enhanced user experience, fostering positive interaction with the utilized technologies",
          service2_11:"Increasing Efficiency and Productivity",
          service2_12:"Providing appropriate solutions boosts overall efficiency and increases organizational productivity",
          
          // service three 
          service3:"Customizing Services",
          service3_2:"Offering personalized services to meet the unique needs of each client",
          service3_3:"Satisfying clients through unique and fitting experiences",
          service3_4:"We focus on precisely meeting the needs of your business by customizing unique solutions. We work closely with you to understand the details of your requirements and tailor solutions to align with your identity and unique business needs",
          service3_5:"Impact of the Application",
          service3_6:"Addressing Specific Needs",
          service3_7:"We identify and understand the specifics of your needs to deliver a solution that perfectly addresses those requirements",
          service3_8:"Enhancing Competitive Edge",
          service3_9:"Customizing solutions gives you an edge over competitors by offering unique services that reflect your brand identit",
          service3_11:"",
          service3_12:"",





        // CONTACT US 
        
        service0:"select a service",
        name:"Name",
        email:"Email Address",
        message:"Write your message here",
        number:"phone Number",
        sendmess:"send",


        // about page 
        aboutsubtitle:"At MBV, we believe in the power of information and its impact on decision-making. We are here to empower enterprises and businesses to achieve leadership and innovation through effective information utilization. We provide advanced information technology solutions that enable leaders and decision-makers to make wise and informed decisions that drive them towards transformation and sustainable growth",
        aboutsubtitle1:"At MBV, we believe in the power of information and its impact on decision-making. We are here to empower enterprises and businesses to achieve leadership and innovation through effective information utilization",
        aboutsubtitle2:" We provide advanced information technology solutions that enable leaders and decision-makers to make wise and informed decisions that drive them towards transformation and sustainable growth",
        about1:"ABOUT",
        OurGoals:"Our Goals",
        OurGoals1:"	Offering Innovative IT Solutions",
        OurGoals12:"The company aims to develop and provide new and innovative IT solutions that meet the needs and expectations of customers",
        OurGoals2:"2.	Achieving Customer Satisfaction",
        OurGoals22:"customer satisfaction by providing high-quality services and innovative products, and by effectively responding to their needs and requirements",
        OurGoals3:"3.	Enhancing Leadership and Innovation",
        OurGoals32:"enhance its role as a leader in the IT and innovation industry by developing innovative solutions and fostering creative thinking in solving technical challenges",
        OurGoals4:"4.	Developing Capabilities and Skills",
        OurGoals42:"The company aims to develop and enhance the capabilities and skills of its workforce by providing specialized training programs and professional development opportunities.",
        OurGoals5:"5.	Competitive Excellence",
        OurGoals52:"The company aims to achieve competitive excellence through continuous innovation and by offering effective and innovative solutions that distinguish it from its competitors in the market",
        OurGoals6:"6.	Sustainable Growth",
        OurGoals62:"The company aims to achieve sustainable growth by expanding its business scope and guiding expansion strategies based on accurate market analysis and customer needs",
        OurGoals7:"7.	Enhancing Public Awareness",
        OurGoals72:"The company aims to increase public awareness of its products and services through effective marketing campaigns and by building strong business relationships with customers and partners",







      // CAREER PAGE 
      career:"Career",
      welcome:"Welcome to the MBV Team!",
      welcomeContent:"At MBV, we take pride in being at the forefront of innovation and technology, striving to provide advanced IT solutions that shape the future of the sector. If you are looking for an opportunity to join a team committed to excellence and innovation, we welcome you!",
      why:"Why MBV ?",
      whyContent1:"	We believe in the importance of information and its impact on decision-making",
      whyContent2:"	We offer an inspiring work environment that encourages innovation and continuous development",
      whyContent3:"	We provide flexible job opportunities to suit the diverse needs of freelancers.",

      Requirements:"Job Requirements",
      Requirements1:"Experience in application and software development.",
      Requirements2:"	Ability to handle customer requirements and provide customized solutions.",
      Requirements3:"	Flexibility and adaptability to changes and challenges.",
      Requirements4:"	Commitment to work quality and continuous improvement.",


      WhatWeOffer:"What We Offer",
      WhatWeOffer1:"	Opportunities to participate in diverse and inspiring projects, both large and small.",
      WhatWeOffer2:"	A work environment that encourages learning and professional development.",
      WhatWeOffer3:"	Training and development opportunities to enhance your skills and capabilities.",

      howtoapply:"How to Apply",
      howtoapplyContent:"If you are interested in joining our team and believe you have the required skills and experience, please send your resume to [info@mbyvision.com]",
      howtoapplyContent1:"At MBV, we consider every employee as part of our family, working together towards achieving success and excellence. Join us today and be part of this exciting journey towards the future of technology",

      // footer 
      find:"Find us",
      find1:"Kingdom of Saudi Arabia / Riyadh",
      call:"Call us",
      mail:"Mail us",
      Follow:"Follow us",
      Quick:"Quick Links",
    },
    ar:{

      // NAVBAR WORDS 

        home:"الرئيسية",
        about:"حولنا",
        about1:"نبذة عنا",
        contact:"تواصل معنا",
        language:"اللغة",
        en:"",
        projects:"أعمالنا",
        Articles:"مدونة",
        show_more:"رؤية المزيد",
        showAll:"جميع الخدمات",



        // HERO SECTION IN HOME PAGE 

        typing1:"تقنيات الغد، تُبنى اليوم لعالم أفضل",
        typing2:"التكنولوجيا ترسم ملامح المستقبل، خطوة بخطوة",
        typing3:"نحو مستقبل متطور بحلول عملية وذكية",
        typing4:"ابتكارات تلامس الواقع، لحياة يومية أكثر تطورًا",
        Ourvision:"للغد ",
        Ourvisionspan:"رؤيتنا",
        TitleArticles:"مدونة Made By Vision",
        SubtitleArticles:"محتواك الرائع من المصدر",
        seemorecard:"رؤية المزيد...",
        ontime:"في الموعد",
        ontime1:"نقدر وقتك",
        teamwork:"فريق عمل",
        teamwork1:"يتطور من أجلك",
        Creativesupply:"التزويد الابداعي",
        Creativesupply1:"لحلول تطور اعمالك",
        Renewedideas:"افكار متجددة",
        Renewedideas1:"تميزك عن الاخرين",


        // Service Worker 


        Services:"خدماتنا",
        service4:"ضمان الجودة",
        service5:"البرمجة ",
        service6:"الاختبار ",
        service7:"النشر ",
        service8:"تدريب المستخدم",
        service9:"دعم ما بعد النشر",
        service10:"الصيانة ",
        service11:"تطوير البرمجيات ",
        select_now:"اخترها الآن",
        Built_Service:"خدماتنا تبنى خصيصا لعملك التجاري",
        offering:"ماذا نوفر لك",

        
        // service one 
        service1:"التحليل والتصميم ",
        service1_2:"تحليل متطلبات العمل وتصميم حلاً فعّالاً يلبي احتياجات العميل",
        service1_3:"تقديم حلول تقنية مخصصة تعكس رؤية العميل وتحسين كفاءة العمليات",
        service1_4:"نحن هنا لفهم رؤيتك وتحولها إلى واقع. يتمثل التحليل في استكشاف أدق تفاصيل احتياجاتك ومتطلباتك، حيث نقوم بتحليل كل جانب من جوانب عملك. بعد ذلك، يأتي التصميم ليحول هذه المتطلبات إلى خطة تنفيذ ملموسة، يشمل تصميم واجهة المستخدم وتحديد الوظائف الرئيسية.",
        service1_5:"فوائد التطبيق",
        service1_6:"تحسين الإنتاجية",
        service1_7:"يضع التحليل الدقيق أساسًا لتحسين كفاءة العمل وزيادة الإنتاجية",
        service1_8:"تحقيق التواصل الفعّال",
        service1_9:"يساعد التصميم على إنشاء واجهة مستخدم فعّالة، مما يعزز تفاعل المستخدمين مع التطبيق بشكل إيجابي ",
        service1_11:"تحقيق أهداف العمل",
        service1_12:"يضمن التحليل والتصميم تحقيق أهداف عملك بكفاءة عالية، مما يسهم في نجاح المشروع",


        
        
        // service tow 
        service2:"تقديم حلول مناسبة",
        service2_2:"تقديم حلول فريدة تتناسب مع متطلبات العمل والتكنولوجيا المستخدمة",
        service2_3:"دعم العملاء بتقنيات حديثة وحلول تساهم في تطوير أعمالهم",
        service2_4:"نحن ندرك أن كل منشأة لديها احتياجات فريدة، ولهذا نقدم حلولًا مخصصة تتناسب مع طبيعة عملك. نبدأ بفهم تفاصيل عملك واحتياجاتك، ونقوم بتقديم خطط ملائمة وفقًا لأهدافك وتحدياتك الفريدة",
        service2_5:"فوائد التطبيق",
        service2_6:"تحقيق أفضل تكامل",
        service2_7:"يساعد تقديم حلول مخصصة في تعزيز تكامل أنظمة العمل داخل المنشأة، مما يحقق تدفقًا أكثر فعالية",
        service2_8:"تحسين تجربة المستخدم",
        service2_9:"يتيح اختيار الحلول الملائمة تحسين تجربة المستخدم، مما يعزز التفاعل الإيجابي مع التقنيات المستخدمة",
        service2_11:"زيادة الكفاءة والإنتاجية",
        service2_12:"توفير حلول ملائمة يعزز الكفاءة العامة ويزيد من إنتاجية المنشأة",
        
        // service three 
        service3:"خدمات التخصيص",
        service3_2:"توفير خدمات مخصصة لتلبية احتياجات فريدة لكل عميل",
        service3_3:"إرضاء العملاء من خلال تقديم تجارب فريدة وملائمة",
        service3_4:"نهتم بتلبية احتياجات عملك بشكل دقيق من خلال تخصيص حلول فريدة. نعمل جنبًا إلى جنب معك لفهم تفاصيل متطلباتك ونقوم بتعديل الحلول بما يتلاءم مع هويتك واحتياجات عملك الفريدة",
        service3_5:"فوائد التطبيق",
        service3_6:"تلبية احتياجات محددة",
        service3_7:"نقوم بتحديد وفهم تفاصيل احتياجاتك الخاصة لتقديم حلاً يلبي تمامًا تلك الاحتياجات",
        service3_8:"تعزيز التميز التنافسي",
        service3_9:"تخصيص الحلول يمنحك تفوقًا على المنافسين من خلال تقديم خدمات فريدة تعكس هوية علامتك التجارية",
        service3_11:"",
        service3_12:"",



        // CONTACT US 

        service0:"اختر خدمة",
        name:"اسمك",
        email:"بريدك الالكتروني",
        message:"الرسالة",
        number:"هاتفك",
        send:"ارسال",
        
// صفحة حولنا

        aboutsubtitle:"في MBV، نؤمن بقوة المعلومات وأثرها في صنع القرارات. نحن هنا لتمكين المؤسسات والشركات من تحقيق القيادة والابتكار من خلال استخدام المعلومات بشكل فعّال. نقدم حلول تكنولوجيا المعلومات المتطورة التي تمكّن القادة وأصحاب القرار من اتخاذ القرارات الحكيمة والمستنيرة التي تدفع بهم نحو التحول والنمو المستدام",
        aboutsubtitle1:"في MBV، نؤمن بقوة المعلومات وأثرها في صنع القرارات. نحن هنا لتمكين المؤسسات والشركات من تحقيق القيادة والابتكار من خلال استخدام المعلومات بشكل فعّال",
        aboutsubtitle2:"نقدم حلول تكنولوجيا المعلومات المتطورة التي تمكّن القادة وأصحاب القرار من اتخاذ القرارات الحكيمة والمستنيرة التي تدفع بهم نحو التحول والنمو المستدام.",
        about1:"حول",
        OurGoals:"أهدافنا",
        OurGoals1:"	تقديم حلول تكنولوجيا المعلومات المبتكرة",
        OurGoals12:"تسعى الشركة إلى تطوير وتقديم حلول تكنولوجيا المعلومات الجديدة والمبتكرة التي تلبي احتياجات العملاء وتفي بتطلعاتهم.",
        OurGoals2:"	تحقيق رضا العملاء",
        OurGoals22:" تهدف الشركة إلى تحقيق رضا العملاء عن طريق تقديم خدمات عالية الجودة والمنتجات المبتكرة، والاستجابة الفعّالة لاحتياجاتهم ومتطلباتهم.",
        OurGoals3:"	تعزيز القيادة والابتكار",
        OurGoals32:"تسعى الشركة إلى تعزيز دورها كقائدة في صناعة تكنولوجيا المعلومات والابتكار، من خلال تطوير حلول مبتكرة والتفكير الإبداعي في حل المشاكل التقنية",
        OurGoals4:"	تطوير القدرات والمهارات",
        OurGoals42:" تهدف الشركة إلى تطوير وتعزيز قدرات ومهارات فريق العمل من خلال توفير برامج تدريبية متخصصة وفرص التطوير المهني",
        OurGoals5:"	التميز التنافسي",
        OurGoals52:"تسعى الشركة إلى تحقيق التميز التنافسي عن طريق الابتكار المستمر وتقديم الحلول الفعالة والمبتكرة التي تميزها عن منافسيها في السوق.",
        OurGoals6:"	النمو المستدام",
        OurGoals62:"تهدف الشركة إلى تحقيق النمو المستدام من خلال توسيع نطاق عملها وتوجيه استراتيجيات التوسع بناءً على تحليل سوقي دقيق واحتياجات العملاء.",
        OurGoals7:"تعزيز الوعي العام",
        OurGoals72:"تهدف الشركة إلى زيادة الوعي العام بمنتجاتها وخدماتها من خلال حملات التسويق الفعّالة وبناء علاقات تجارية قوية مع العملاء والشركاء.",



         // CAREER PAGE 
      career:"التوظيف",
      welcome:"مرحبًا بك في فريق MBV!",
      welcomeContent:"في MBV، نفخر بكوننا محورًا للابتكار والتقنية، حيث نسعى جاهدين لتقديم حلول تكنولوجيا المعلومات المتطورة التي تحدد مستقبل القطاع. إذا كنت تبحث عن فرصة للانضمام إلى فريق ملتزم بالتميز والابتكار، فنحن نرحب بك!",
      why:"لماذا MBV؟",
      whyContent1:"	نؤمن بأهمية المعلومات وأثرها في صنع القرارات.",
      whyContent2:"	نقدم بيئة عمل ملهمة تشجع على الابتكار والتطوير المستمر",
      whyContent3:"	نقدم فرص عمل مرنة تناسب مختلف احتياجات الفري لانسر",
      
      Requirements:"متطلبات الوظيفة:",
      Requirements1:"خبرة في مجال تطوير التطبيقات والبرمجيات.",
      Requirements2:"القدرة على التعامل مع متطلبات العملاء وتقديم حلول مخصصة.",
      Requirements3:"المرونة والقدرة على التكيف مع التغييرات والتحديات.",
      Requirements4:"الالتزام بجودة العمل والتحسين المستمر",


      WhatWeOffer:"نقدم لكم:",
      WhatWeOffer1:"فرص للمشاركة في مشاريع متنوعة وملهمة، سواء كانت كبيرة أو صغيرة.",
      WhatWeOffer2:"بيئة عمل تشجع على التعلم والتطوير المهني.",
      WhatWeOffer3:"فرص للتدريب والتطوير لتعزيز مهاراتك وقدراتك.",

      howtoapply:"كيفية التقديم",
      howtoapplyContent:"إذا كنت مهتمًا بالانضمام إلى فريقنا وتعتقد أن لديك المهارات والخبرات المطلوبة، نرجو منك إرسال السيرة الذاتية الخاصة بك عبر البريد الإلكتروني [info@mbyvision.com]",
      howtoapplyContent1:"في MBV، نعتبر كل موظف جزءًا من عائلتنا ونعمل معًا نحو تحقيق النجاح والتميز. انضم إلينا اليوم وكن جزءًا من هذه الرحلة المثيرة نحو مستقبل التكنولوجيا!",
    


       // footer 
       find:"تجدنا في",
       find1:"المملكة العربية السعودية /الرياض",
       call:"اتصل بنا",
       mail:"بريدنا الالكتروني",
       Follow:"تابعنا على",
      Quick:"روابط سريعة",




    }
  }
  
  let seletlanguage = document.getElementById("languages");
  seletlanguage.addEventListener("click", (event) => {
      if (event.target.value === "en") {
          setlanguage(event.target.value);
          event.target.value = "ar";
      }
       
      else if (event.target.value === "ar") {
          setlanguage(event.target.value);
          event.target.value = "en";
      }
      localStorage.setItem("lang", event.target.value);
  });

  function setlanguage(language) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const translationkey = element.getAttribute("data-i18n");
      element.textContent = translations[language][translationkey];
    });

    document.dir = language === "ar" ? "rtl" : "ltr";
    let navend = document.getElementById("nav-end")
    navend.classList = language === "en" ?   "navbar-end":"navbar-start";
    let btnlanguage=document.querySelector('#languages')
    btnlanguage.classList = language === "en" ? "languages-button": "languages-button1" ;
  }
  

document.addEventListener('DOMContentLoaded', () => {
    setlanguage(localStorage.getItem("lang"));
});






// swiper code  



let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




//  SCROLL TO TOP SCRIPT 
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
  // This can be changed - experiment
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.15) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)





