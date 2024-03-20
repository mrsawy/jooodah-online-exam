const xlsx = require("xlsx");

// __________________________________________________________________

var beginner = [
  {
    value: {
      ar: "ما هو الهدف الرئيسي لمندوب المبيعات؟",
      en: "What is the goal of a salesperson?",
    },
    correct_answer: { ar: "زيادة أرباح الشركة", en: "Increasing revenue for the company" },
    wrong_answers: [
      { ar: "بناء علاقات مع الزبائن", en: "Building relationships with customers" },
      { ar: "تحقيق أرقام أهداف المبيعات الشخصية", en: "Meeting personal targets" },
      { ar: "جميع الإجابات صحيحة", en: "All answers are correct" },
    ],
  },
  {
    value: {
      ar: "ما هي الطريقة الأفضل لبناء الثقة مع العملاء المحتملين؟",
      en: "What is the key to establishing trust with potential customers?",
    },
    correct_answer: { ar: "الانصات الفعال والاهتمام", en: "Active listening and empathy" },
    wrong_answers: [
      { ar: "تسليط الضوء على مميزات المنتج", en: "Highlighting product features" },
      { ar: "توفير الخصومات", en: "Offering discounts" },
      { ar: "التكلم بثقة حول المنتج", en: "Making bold claims about the product" },
    ],
  },
  {
    value: {
      ar: "أي ممن يلي يعد مهارة أساسية للنجاح في التفاوض أثناء البيع؟",
      en: "Which of the following is an essential skill for successful sales negotiations?",
    },
    correct_answer: {
      ar: "استخلاص حلول مفيدة للطرفين",
      en: "Finding mutually beneficial solutions",
    },
    wrong_answers: [
      { ar: "أن تكون متمسك بموقفك وغير مرن", en: "Being rigid and inflexible" },
      { ar: "اتباع أسلوب المواجهة", en: "Taking a confrontational approach" },
      { ar: "استخدام أسلوب الضغط", en: "Using high-pressure tactics" },
    ],
  },
  {
    value: {
      ar: "كيف يستطيع مندوب المبيعات تخطي اعتراضات العميل بشكل فعال؟",
      en: "How can a salesperson overcome objections effectively?",
    },
    correct_answer: {
      ar: "الانصات بشكل فعال وتسليط الضوء على شكوك واعتراضات العملاء",
      en: "Listening attentively and addressing concerns",
    },
    wrong_answers: [
      { ar: "تجاهل الاعتراضات والمضي", en: "Ignoring objections and moving on" },
      { ar: "عدم إعطاء أهمية لشكوك العملاء", en: "Discrediting the customer's concerns" },
      { ar: "تقديم عروض مجانية", en: "Offering freebies or incentives" },
    ],
  },
  {
    value: {
      ar: "ما هو الغرض من تحليل احتياجات العميل المحتمل؟",
      en: "What is the purpose of conducting a needs analysis with a potential customer?",
    },
    correct_answer: {
      ar: "جمع المعلومات وفهم احتياجات العميل",
      en: "To gather information and understand customer requirements",
    },
    wrong_answers: [
      {
        ar: "تحديد مواضع احتمالية زيادة حصة المبيعات للعميل",
        en: "To identify areas for upselling",
      },
      { ar: "بناء العلاقات والثقة", en: "To establish rapport and build trust" },
      {
        ar: "إقناع العميل بشراء منتجات غير ضرورية له",
        en: "To persuade customers to buy unnecessary products",
      },
    ],
  },
  {
    value: {
      ar: "أي من أسلوب المبيعات الذي يتضمن طرح سلسلة من الأسئلة للكشف عن احتياجات العميل؟",
      en: "Which sales technique involves asking a series of questions to uncover customer pain points?",
    },
    correct_answer: { ar: "البيع الاستشاري", en: "Consultative selling" },
    wrong_answers: [
      { ar: "البيع بعرض المميزات", en: "Feature-benefit selling" },
      { ar: "البيع باستخدام العلاقات", en: "Relationship selling" },
      { ar: "البيع بالصفقات", en: "Transactional selling" },
    ],
  },

  {
    value: {
      ar: "ماذا يعني مصطلح USP في المبيعات؟",
      en: "What does the term 'USP' stand for in sales?",
    },
    correct_answer: { ar: "مقترح البيع الفريد", en: "Unique Selling Proposition" },
    wrong_answers: [
      { ar: "سعر بيع مميز", en: "Unique Selling Price" },
      { ar: "سياسة خدمة استثنائية", en: "Unparalleled Service Policy" },
      { ar: "بروتوكول مبيعات شامل", en: "Universal Sales Protocol" },
    ],
  },
  {
    value: {
      ar: "ما هي وسيلة التواصل المثلى لبناء علاقة وثيقة مع العملاء؟",
      en: "Which communication channel is best suited for building rapport and establishing trust with customers?",
    },
    correct_answer: { ar: "الاجتماع المباشر (وجه لوجه)", en: "Face-to-face meetings" },
    wrong_answers: [
      { ar: "المكالمات الهاتفية", en: "Phone calls" },
      { ar: "البريد الإلكتروني", en: "Emails" },
      { ar: "التراسل على منصات التواصل الاجتماعي", en: "Social media messaging" },
    ],
  },
  {
    value: {
      ar: "أي من الأساليب الآتية يعد أسلوب فعال في إتمام عملية البيع؟",
      en: "Which of the following is an effective closing technique in sales?",
    },
    correct_answer: {
      ar: "الطلب بشكل مباشر من العميل لاتخاذ القرار لإتمام البيع",
      en: "Asking for the sale directly",
    },
    wrong_answers: [
      { ar: "الإلحاح وملاحقة العميل لإتمام عملية البيع", en: "Being pushy and aggressive" },
      { ar: "إعطاء الكثير من الخيارات", en: "Providing too many options" },
      { ar: "تجنب محاولة مناقشة عملية إتمام البيع", en: "Avoiding the topic of closing" },
    ],
  },
  {
    value: {
      ar: "ما هو غرض وجود مسار لتصفية المبيعات؟",
      en: "What is the purpose of a sales pipeline?",
    },
    correct_answer: {
      ar: "للتنبؤ بإيرادات المبيعات المستقبلية",
      en: "To forecast future sales revenue",
    },
    wrong_answers: [
      { ar: "تتبع مدى تقدم مندوبي المبيعات", en: "To track the progress of sales reps" },
      { ar: "إدارة شكاوى العميل", en: "To manage customer complaints" },
      { ar: "جدولة اجتماعات فريق المبيعات", en: "To schedule sales team meetings" },
    ],
  },
  {
    value: {
      ar: "كيف يعبر مندوب المبيعات بأنه ينصت للعميل بشكل الفعالة؟",
      en: "How can a salesperson demonstrate active listening skills?",
    },
    correct_answer: {
      ar: "تقديم تلميحات لفظية وغير لفظية بأنه يفهم العميل",
      en: "Focusing solely on the product featuresg",
    },
    wrong_answers: [
      { ar: "مقاطعة العميل بشكل متواصل", en: "Interrupting the customer frequently" },
      { ar: "طرح الأسئلة التوجيهية", en: "Asking leading questions" },
      { ar: "التركيز بشكل حصري على ميزات المنتج", en: "Focusing solely on the product featuress" },
    ],
  },

  {
    value: {
      ar: "ما هو الفرق بين الميزات والفوائد في المبيعات؟",
      en: "What is the difference between a feature and a benefit in sales?",
    },
    correct_answer: {
      ar: "تمثل الميزات سمات المنتج، بينما تمثل الفوائد عناصر حل لحاجات العملاء",
      en: "Features describe product attributes, while benefits explain how they solve customer problems",
    },
    wrong_answers: [
      {
        ar: "الميزات هي أمر أساسي، أما الفوائد هي أمر اختياري",
        en: "Features are essential, while benefits are optional",
      },
      {
        ar: "الفوائد ملموسة، في حين أن الميزات غير ملموسة",
        en: "Benefits are tangible, while features are intangible",
      },
      {
        ar: "الميزات طويلة الأمد، بينما الفوائد قصيرة الأمد",
        en: "Features are long-term, while benefits are short-term",
      },
    ],
  },
  {
    value: {
      ar: "ما هو غرض العرض التقديمي في المبيعات؟",
      en: "What is the purpose of a sales presentation?",
    },
    correct_answer: {
      ar: "إظهار مميزات وفوائد المنتج",
      en: "To showcase product features and benefits",
    },
    wrong_answers: [
      { ar: "إقناع العميل بالشراء بشكل فوري", en: "To convince customers to buy immediately" },
      { ar: "تثقيف العملاء عن قطاع المنتج", en: "To educate customers about the industry" },
      {
        ar: "بناء علاقات طويلة الأمد مع العملاء",
        en: "To build long-term relationships with customers",
      },
    ],
  },
  {
    value: {
      ar: "ما هو غرض التعامل مع اعتراضات العميل في المبيعات؟",
      en: "What is the role of objection handling in sales?",
    },
    correct_answer: {
      ar: "لتخطي أسباب الرفض من العميل ومعالجة جميع شكوكه بخصوص المنتج",
      en: "To overcome customer resistance and address concerns",
    },
    wrong_answers: [
      { ar: "لتجنب جميع الاعتراضات", en: "To avoid objections altogether" },
      { ar: "إبعاد العملاء عن طرح الأسئلة", en: "To discourage customers from asking questions" },
      { ar: "التفاوض على أسعار أعلى", en: "To negotiate higher prices" },
    ],
  },
  {
    value: {
      ar: "أي مما يلي يعد مثالاً لسؤال مفتوح (open-ended) في المبيعات؟",
      en: "Which of the following is an example of an open-ended question in sales?",
    },
    correct_answer: {
      ar: "ما هي التحديات التي تواجهها في أعمالك؟",
      en: "What challenges are you facing in your business?",
    },
    wrong_answers: [
      { ar: "هل ترغب في شراء منتجنا؟", en: "Would you like to buy our product?" },
      { ar: "هل أنت راضٍ عن مزودك الحالي؟", en: "Are you satisfied with your current provider?" },
      {
        ar: "هل تسمح لي أن أعرض عليك أحدث كتالوج لمنتجاتنا؟",
        en: "Can I show you our latest product brochure?",
      },
    ],
  },
  {
    value: {
      ar: "ما هو النهج الأكثر فعالية لبناء علاقات طويلة الأمد مع العملا	ء؟",
      en: "Which approach is most effective for building long-term customer relationships?",
    },
    correct_answer: {
      ar: "تقديم خدمة ودعم استثنائية للعملاء",
      en: "Providing exceptional customer service and support",
    },
    wrong_answers: [
      { ar: "التركيز فقط على إتمام الصفقات", en: "Focusing solely on closing deals" },
      { ar: "تقديم أقل سعر ممكن", en: "Offering the lowest price" },
      { ar: "استخدام أسلوب البيع بإلحاح", en: "Using aggressive sales tactics" },
    ],
  },
  {
    value: {
      ar: "كيف يمكن لمندوب المبيعات إظهار التعاطف مع العميل؟",
      en: "How can a salesperson demonstrate empathy to a customer?",
    },
    correct_answer: {
      ar: "إبداء التفهم والتقدير لمشاعرهم",
      en: "Showing understanding and acknowledging their feelings",
    },
    wrong_answers: [
      { ar: "تجاهل عواطف العملاء", en: "Ignoring customer emotions" },
      { ar: "عدم قبول شكاوى العملاء", en: "Dismissing customer complaints" },
      { ar: "تجنب التعامل الشخصي مع العميل", en: "Avoiding personal interactions" },
    ],
  },
  {
    value: {
      ar: 'ما هو الغرض من أسلوب "تجنب الاعتراضات" في المبيعات؟',
      en: "What is the purpose of objection prevention in sales?",
    },
    correct_answer: {
      ar: "توقع الاعتراضات المحتملة ومعالجتها بشكل استباقي",
      en: "To anticipate and address potential objections proactively",
    },
    wrong_answers: [
      {
        ar: "إضعاف مبادرة العملاء في طرح الأسئلة",
        en: "To discourage customers from asking questions",
      },
      { ar: "تجنب معالجة شكوك العملاء", en: "To avoid addressing customer concerns" },
      {
        ar: "استخدام الاعتراضات كفرصة لزيادة البيع",
        en: "To use objections as opportunities for upselling",
      },
    ],
  },
  {
    value: {
      ar: "أي مما يلي يعد مثالاً لأحد مؤشرات الأداء الرئيسي (KPI) للمبيعات؟",
      en: "Which of the following is an example of a sales KPI (Key Performance Indicator)?",
    },
    correct_answer: { ar: "الإيرادات الناتجة من المبيعات", en: "Revenue generated from sales" },
    wrong_answers: [
      { ar: "عدد رسائل البريد الإلكتروني المرسلة للعملاء", en: "Number of emails sent" },
      { ar: "عدد المكالمات مع العملاء", en: "Number of calls" },
      { ar: "عدد الزيارات أو الاجتماعات مع العملاء", en: "Office attendance record" },
    ],
  },

  {
    value: {
      ar: "ما هو نهج المبيعات الذي يركز على بناء العلاقات وفهم احتياجات العملاء؟",
      en: "Which sales approach focuses on building relationships and understanding customer needs?",
    },
    correct_answer: { ar: "البيع عن طريق بناء العلاقات", en: "Relationship selling" },
    wrong_answers: [
      { ar: "البيع عن طريق الصفقات", en: "Transactional selling" },
      { ar: "البيع الاستشاري", en: "Consultative selling" },
      { ar: "البيع بالإقناع", en: "Persuasive selling" },
    ],
  },
  {
    value: {
      ar: "كيف يمكن لمندوب المبيعات التعامل مع الرفض بشكل فعال؟",
      en: "How can a salesperson effectively handle rejection?",
    },
    correct_answer: {
      ar: "التعلم من التجربة وتعديل النهج والأسلوب",
      en: "Learning from the experience and adjusting their approach",
    },
    wrong_answers: [
      {
        ar: "أخذ الرفض على محمل شخصي والشعور بالإحباط",
        en: "Taking rejection personally and getting discouraged",
      },
      {
        ar: "تجاهل اعتراضات العملاء والمضي قدمًا",
        en: "Ignoring customer objections and moving on",
      },
      {
        ar: "إقناع العميل بالقوة والإلحاح لتغيير رأيه",
        en: "Persuading the customer forcefully to change their mind",
      },
    ],
  },
  {
    value: {
      ar: "ما هو الغرض الأساسي من تنبؤات المبيعات؟",
      en: "What is the primary purpose of a sales forecast?",
    },
    correct_answer: {
      ar: "تقدير إيرادات المبيعات المستقبلية",
      en: "To estimate future sales revenue",
    },
    wrong_answers: [
      { ar: "التنبؤ بشكاوى العملاء المحتملة", en: "To predict potential customer objections" },
      { ar: "تتبع أنشطة المنافسين", en: "To track competitor activities" },
      { ar: "تحديد فرص زيادة المبيعات", en: "To identify upselling opportunities" },
    ],
  },
  {
    value: {
      ar: "ما هو دور المعرفة بالمنتج في عملية المبيعات؟",
      en: "What is the role of product knowledge in sales?",
    },
    correct_answer: {
      ar: "إظهار الخبرة مما يساعد على بناء الثقة عند العملاء",
      en: "To demonstrate expertise and build trust with customers",
    },
    wrong_answers: [
      { ar: "إرباك العملاء بالتفاصيل الفنية", en: "To confuse customers with technical details" },
      { ar: "تجنب مناقشة ميزات المنتج", en: "To avoid discussing product features" },
      {
        ar: "إقناع العملاء بشراء إضافات غير ضرورية",
        en: "To convince customers to buy unnecessary add-ons",
      },
    ],
  },
  {
    value: {
      ar: "ما هو النهج الأكثر فعالية للتعامل مع العميل صعب المراس؟",
      en: "Which approach is most effective for handling a difficult customer?",
    },
    correct_answer: {
      ar: "التزام الهدوء والانصات الفعال وإيجاد الحلول",
      en: "Staying calm, actively listening, and finding a solution",
    },
    wrong_answers: [
      { ar: "تجاهل شكوك العميل تجاه المنتج", en: "Ignoring the customer's concerns" },
      {
        ar: "الرد بشكل دفاعي والجدال مع العميل",
        en: "Reacting defensively and arguing with the customer",
      },
      { ar: "الامتناع عن خدمة العميل", en: "Refusing to serve the customer" },
    ],
  },
  {
    value: {
      ar: "أي من تقنيات البيع التي تتضمن تسليط الضوء على كيفية قيام المنتج بحل مشكلة محددة للعميل؟",
      en: "Which sales technique involves highlighting how a product solves a customer's specific problem?",
    },
    correct_answer: { ar: "البيع بعرض الحلول", en: "Solution selling" },
    wrong_answers: [
      { ar: "البيع عن طريق العلاقات", en: "Relationship selling" },
      { ar: "بيع المزايا والفوائد", en: "Feature-benefit selling" },
      { ar: "البيع الاستشاري", en: "Consultative selling" },
    ],
  },
  {
    value: { ar: "ما هو دور المتابعة في المبيعات؟", en: "What is the role of follow-up in sales?" },
    correct_answer: {
      ar: "تعزيز عملية المبيعات وبناء الثقة مع العملاء المحتملين",
      en: "To reinforce the sales message and build trust with potential customers",
    },
    wrong_answers: [
      { ar: "إقناع العملاء بالشراء الفوري", en: "To persuade customers to buy immediately" },
      {
        ar: "الحفاظ على العلاقات مع العملاء الحاليين",
        en: "To maintain relationships with existing customers",
      },
      { ar: "معالجة شكاوى العملاء", en: "To address customer complaints" },
    ],
  },
  {
    value: {
      ar: "أي مما يلي يعد مثالاً على سؤال لإتمام عملية البيع؟",
      en: "Which of the following is an example of a closing question in sales?",
    },
    correct_answer: {
      ar: '"هل ترغب في اجراء الطلب اليوم؟"',
      en: '"Would you like to place an order today?"',
    },
    wrong_answers: [
      { ar: '"متى ترغب في اجراء الطلب؟"', en: '"When would you like to place an order?"' },
      { ar: '"كيف سمعت عن شركتنا؟"', en: '"How did you hear about our company?"' },
      {
        ar: '"هل تسمح لي بتزويدك بمزيد من المعلومات؟"',
        en: '"Can I provide you with more information?"',
      },
    ],
  },
  {
    value: {
      ar: "كيف يمكن لمندوب المبيعات بناء علاقة مع عميل محتمل؟",
      en: "How can a salesperson build rapport with a potential customer?",
    },
    correct_answer: {
      ar: "من خلال إظهار الاهتمام الصادق بالعميل وطرح الأسئلة المفتوحة",
      en: "By showing genuine interest and asking open-ended questions",
    },
    wrong_answers: [
      {
        ar: "من خلال تسليط الضوء على ذاته فقط خلال المحادثة",
        en: "By making the conversation all about themselves",
      },
      { ar: "عن طريق تقديم عروض مبيعات ملحّة", en: "By making aggressive sales pitches" },
      { ar: "عن طريق تجنب التعامل الشخصي", en: "By avoiding personal interactions" },
    ],
  },
  {
    value: {
      ar: "ما هو نهج المبيعات الذي يتضمن تصميم عملية المبيعات وفقًا للاحتياجات والتفضيلات المميزة لكل عميل؟",
      en: "Which sales approach involves tailoring the sales message to each customer's unique needs and preferences?",
    },
    correct_answer: { ar: "البيع بالتخصيص", en: "Personalized selling" },
    wrong_answers: [
      { ar: "البيع عن طريق العلاقات", en: "Relationship selling" },
      { ar: "البيع الاستشاري", en: "Consultative selling" },
      { ar: "البيع بعرض الحلول", en: "Solution selling" },
    ],
  },
  {
    value: {
      ar: "كيف يمكن لمندوب المبيعات التعامل بفعالية مع الاعتراضات المتعلقة بالسعر؟",
      en: "How can a salesperson effectively handle objections related to price?",
    },
    correct_answer: {
      ar: "تعزيز قيمة المنتج وفوائده",
      en: "Reinforcing the value and benefits of the product",
    },
    wrong_answers: [
      { ar: "تجاهل الاعتراضات والمضي قدماً", en: "Ignoring the objections and moving on" },
      { ar: "تقديم الخصومات أو الحوافز", en: "Offering discounts or incentives" },
      {
        ar: "الجدال مع العميل حول استراتيجية التسعير",
        en: "Arguing with the customer about the pricing strategy",
      },
    ],
  },
  {
    value: {
      en: "Jodie's cell phone is badly out-of-date. The salesperson notes that there is a new model for the brand Jodie currently uses. The salesperson begins comparing the features of the expensive new cell phone with Jodie's current one. Jodie, who is familiar with this sales tactic, objects. Why?",
      ar: "أصبح هاتف جودي الخلوي قديم بشكل سيء. لاحظ مندوب المبيعات أن هناك طرازاً جديداً للهاتف الذي تستعمله جودي حالياً. بدأ مندوب المبيعات بمقارنة ميزات الهاتف الخلوي الجديد والباهظ مع هاتف جودي الحالي، الأمر الذي جعل جودي تعترض على هذه المقارنة، فهي تأفل هذا الأسلوب في البيع، ولكن لماذا اعترضت؟",
    },
    correct_answer: {
      en: "Comparing the new cell phone with her outdated one unfairly inflates Jodie's evaluation of the new one",
      ar: "مقارنة الهاتف الخلوي الجديد بهاتفها القديم يؤدي إلى المبالغة في تقييم جودي للهاتف الجديد بشكل مجحف",
    },
    wrong_answers: [
      {
        en: "The salesperson should be comparing options across brands to give Jodie a complete picture of options",
        ar: "على مندوب المبيعات أن يقارن الخيارات بين مختلف العلامات التجارية لإعطاء جودي صورة كاملة عن الخيارات",
      },
      {
        en: "The salesperson should be using more numbers and statistics when comparing the two options",
        ar: "ينبغي أن يستخدم مندوب المبيعات أرقاماً وإحصائيات أكثر عند المقارنة بين الخيارين",
      },
      {
        en: "Explaining the features of the new cell phone in isolation is a better way to help Jodie make a decision",
        ar: "يعد توضيح ميزات الهاتف الخلوي الجديد بشكل منفصل طريقة أنسب لمساعدة جودي على اتخاذ القرار",
      },
    ],
  },
  {
    value: {
      en: "Fiona is preparing a proposal that has three options: high quality, medium quality, and low quality. If she wants the client to accept the highest quality option, in what order should she present the options?",
      ar: "تقوم زينب بإعداد عرض بيع يتضمن ثلاث خيارات: جودة عالية، وجودة متوسطة، وجودة منخفضة. فإذا أرادت أن يوافق العميل على الخيار الأعلى جودة، فما هو الترتيب الذي يجب أن تقدم به الخيارات؟",
    },
    correct_answer: {
      en: "High, medium, low",
      ar: "عالية، متوسطة، منخفضة",
    },
    wrong_answers: [
      {
        en: "Low, medium, high",
        ar: "منخفضة، متوسطة، عالية",
      },
      {
        en: "Low, high, medium",
        ar: "منخفضة، عالية، متوسطة",
      },
      {
        en: "High, low, medium",
        ar: "عالية، منخفضة، متوسطة",
      },
    ],
  },
  {
    value: {
      en: "Frances goes to the store to buy a blazer to wear to a job interview. He starts browsing belts to go with the blazer, but the store clerk guides him towards choosing a blazer first and then picking out belts. Why?",
      ar: "ذهب أحمد إلى المتجر لشراء سترة لارتدائها في مقابلة عمل. بدأ يستعرض الأحزمة التي تتماشى مع سترته، إلا أن موظف المتجر جعله يقوم باختيار السترة أولاً ثم اختيار الأحزمة. لماذا فعل ذلك؟",
    },
    correct_answer: {
      en: "The accessories seem less pricey once the more expensive item is settled on",
      ar: "تبدو الإكسسوارات أقل تكلفة بعد اختيار القطعة الأغلى ثمناً",
    },
    wrong_answers: [
      {
        en: "Once Frances picks out a blazer, he will want to have a belt too",
        ar: "بمجرد اختيار أحمد للسترة، سيرغب في اختيار حزام أيضاً",
      },
      {
        en: "The clerk can contrast the ease of choosing a belt with the more complicated task of choosing a blazer",
        ar: "يستطيع الموظف أن يقارن بين سهولة اختيار الحزام وبين صعوبة اختيار السترة",
      },
      {
        en: "It will be easier to choose a belt that goes with a blazer than a blazer that goes with a belt",
        ar: "اختيار الحزام الذي يتماشى مع السترة أسهل من اختيار السترة التي تتماشى مع الحزام",
      },
    ],
  },
  {
    value: {
      en: "After walking into a prospective business partner's office for the first time, you notice a series of books that you have appreciated for many years. You should...",
      ar: "بعد دخولك مكتب شريك عمل محتمل للمرة الأولى، لاحظت وجود العديد من الكتب التي تحظى بتقديرك لعدة أعوام. يجب عليك:",
    },
    correct_answer: {
      en: "Mention that you also enjoy the books before discussing business",
      ar: "ذكر أنك أيضًا تستمتع بمطالعة نفس الكتب قبل نقاش العمل",
    },
    wrong_answers: [
      {
        en: "Discuss the books only if the prospective business partner brings up the topic",
        ar: "مناقشة الكتب فقط عندما يطرح شريك العمل المحتمل الموضوع",
      },
      {
        en: "Not mention the books in the business meeting",
        ar: "عدم التطرق إلى الكتب في اجتماع العمل",
      },
      {
        en: "Mention that you also enjoy the books after discussing business",
        ar: "ذكر أنك تستمتع أيضًا بمطالعة الكتب بعد نقاش العمل",
      },
    ],
  },
  {
    value: {
      en: "Colleagues like us more when we...",
      ar: "نحظى بإعجاب زملاء عملنا عندما نقوم ب:",
    },
    correct_answer: {
      en: "All of the above",
      ar: "جميع ما سبق",
    },
    wrong_answers: [
      {
        en: "Provide compliments",
        ar: "تقديم المجاملات",
      },
      {
        en: "Mention significant similarities",
        ar: "ذكر أوجه الشبه المهمة",
      },
      {
        en: "Mention little similarities",
        ar: "ذكر أوجه شبه البسيطة",
      },
    ],
  },
  {
    value: {
      en: "When doing business with a stranger, it is best to...",
      ar: "أثناء ابرام عمل مع الغرباء، فمن المستحسن ...",
    },
    correct_answer: {
      en: "Spend a bit of time getting to know each other first",
      ar: "قضاء بعض الوقت في التعرف على بعض أولاً",
    },
    wrong_answers: [
      {
        en: "Avoid saying anything until the other person mentions how they want to initiate the conversation",
        ar: "تجنب التحدث حتى يوضح الطرف الآخر الطريقة التي يرغب بها في بدء المحادثة",
      },
      {
        en: "Introduce yourself but avoid sharing any personal information",
        ar: "عرّف عن نفسك ولكن لا تشارك أي معلومات شخصية",
      },
      {
        en: "Don't discuss any personal information",
        ar: "لا تناقش أي معلومات شخصية",
      },
    ],
  },
  {
    value: {
      en: "Today you're meeting with Andrea, the CEO of a multinational corporation. She is thinking about setting up a joint venture with you. She spends the first five minutes of the meeting telling you about herself and trying to get to know you better. Why did she do this?",
      ar: "تجتمع أنت اليوم مع رند، الرئيس التنفيذي لشركة متعددة الجنسيات. إنها تفكر في إنشاء مشروع مشترك معك. تقضي الدقائق الخمس الأولى من الاجتماع تخبرك عن نفسها وتحاول التعرف عليك بشكل أفضل. لماذا فعلت هذا؟",
    },
    correct_answer: {
      en: "She wants to find out things you might have in common and create mutual positive feelings for the meeting",
      ar: "إنها تريد اكتشاف الأشياء المشتركة بينكما وخلق مشاعر إيجابية متبادلة خلال الاجتماع",
    },
    wrong_answers: [
      {
        en: "She wants to show you that she's not in a rush to end the meeting, which will result in a less aggressive atmosphere",
        ar: "إنها تريد أن تظهر لك أنها ليست في عجلة من أمرها لإنهاء الاجتماع، الأمر الذي سيؤدي إلى خلق جو مريح",
      },
      {
        en: "She wants to distract you from the real purpose of the meeting, which will make you more receptive to what she says later on",
        ar: "إنها تريد صرف انتباهك عن الغرض الحقيقي من الاجتماع، مما سيجعلك أكثر تقبلاً لما تقوله لاحقاً",
      },
      {
        en: "She wants to make the meeting last longer, so you will have less energy to disagree with her later on",
        ar: "إنها تريد أن تجعل الاجتماع يدوم لفترة أطول، بحيث يكون لديك طاقة أقل للاختلاف معها لاحقاً",
      },
    ],
  },
  {
    value: {
      en: 'Jeminah is a leader in her church. When appealing to other members for donations, she uses words like "family" or "sisterhood." This is an example of...',
      ar: 'جمانا قائدة مجموعة في كنيستها. عند مناشدة الأعضاء الآخرين للتبرع، تستخدم كلمات مثل "الأسرة" أو "الأخوّة". وهذا مثال على...',
    },
    correct_answer: {
      en: "Kinship",
      ar: "القرابة",
    },
    wrong_answers: [
      {
        en: "Credibility",
        ar: "المصداقية",
      },
      {
        en: "Cooperation",
        ar: "التعاون",
      },
      {
        en: "Similarity",
        ar: "التشابه",
      },
    ],
  },
  {
    value: {
      en: "Emelia is merging two work teams that have never interacted before. In their first meeting, she assigns everyone seats at the conference table, ensuring that the two teams are mixed. Was this a good approach?",
      ar: "تقوم سارة بدمج فريقي عمل لم يسبق لهما أن يتفاعلا مع بعضهما. خصصت مقاعد للجميع على طاولة المؤتمر في اجتماعهم الأول مما يضمن اختلاط الفريقين. هل كان هذا نهجاً جيداً؟",
    },
    correct_answer: {
      en: "Yes, it helps create more cohesion as a new team",
      ar: "نعم، فهو يساعد على خلق المزيد من التماسك كفريق جديد",
    },
    wrong_answers: [
      {
        en: "Yes, it establishes Emelia as their leader",
        ar: "نعم، هذا يجعل سارة قائدة لهم",
      },
      {
        en: "No, people want the autonomy to pick their seats",
        ar: "لا، الأفراد يريدون اختيار مقاعدهم بأنفسهم",
      },
      {
        en: "No, contriving such togetherness will backfire if people don't do it voluntarily",
        ar: "لا، إن افتعال مثل هذا التضافر سيؤدي إلى نتائج عكسية إذا لم يفعل الأفراد ذلك طواعية",
      },
    ],
  },
  {
    value: {
      en: "Ava is a volleyball coach and has heard that there has been some fighting among her players. To help rebuild cohesion within the team, what would be the most effective message?",
      ar: "ليلى مدربة كرة طائرة وسمعت أنه كان هناك اشتباك بين لاعبيها. ما هي الرسالة الأكثر فعالية للمساعدة في إعادة بناء التماسك داخل الفريق؟",
    },
    correct_answer: {
      en: "This is your family. You see them every day, and you pick each other up when you fall. If we want to beat our competitors, we need to work together!",
      ar: "هذه هي عائلتكم. ترون بعضكم كل يوم، وتساعدون بعضكم البعض عندما تتعثرون. إذا أردنا التغلب على منافسينا، علينا أن نعمل معاً!",
    },
    wrong_answers: [
      {
        en: "Ultimately, we can't win if you don't work together. And that's why we're here, to beat the competition and win!",
        ar: "في أي حال، لا يمكننا الفوز إذا لم تعملوا معاً. ولهذا السبب نحن هنا للتغلب على المنافسين والفوز بالمباراة!",
      },
      {
        en: "You're family; don't let a little fighting tear you apart.",
        ar: "أنتم عائلة؛ لا تدعوا بعض القتال يفرقكم.",
      },
      {
        en: "You spend every day together; do you really want to fight all the time?",
        ar: "تقضون كل يوم معاً؛ هل تريدون حقاً أن تتقاتلوا طوال الوقت؟",
      },
    ],
  },
  {
    value: {
      en: "Tobias is trying to line up his successor as the head of his local professional group. He thinks Komal would be the perfect choice. What should Tobias do when encouraging Komal to pursue the position?",
      ar: "يحاول تميم تعيين خليفته كرئيس لمنظمة مهنية محلية حيث يعتقد أن أحمد سيكون الخيار الأمثل. ماذا يجب أن يفعل تميم لتشجيع أحمد على استلام المنصب؟",
    },
    correct_answer: {
      en: "Tell Komal that she is like family to him",
      ar: "يخبر أحمد أنه مثل العائلة بالنسبة له",
    },
    wrong_answers: [
      {
        en: "Tell Komal how many mutual friends you have",
        ar: "يخبر أحمد بعدد الأصدقاء المشتركين بينهم",
      },
      {
        en: "Tell Komal that he will do her a favour if she agrees",
        ar: "يخبر أحمد أنه سيقدم لها معروفاً إذا وافق",
      },
      {
        en: "Tell Komal that the group is doomed without her",
        ar: "يخبر أحمد أن المجموعة محكوم عليها بالفشل بدونه",
      },
    ],
  },
  {
    value: {
      en: "Colleagues are probably more likely to agree to a request if they...",
      ar: "من المحتمل أن يكون زملاؤك أكثر استعداداً للموافقة على طلب ما إذا...",
    },
    correct_answer: {
      en: "Agreed to a related request previously",
      ar: "وافقوا على طلب سابق ذي صلة",
    },
    wrong_answers: [
      {
        en: "Rejected a related request previously",
        ar: "رفضوا طلباً سابقاً ذي صلة",
      },
      {
        en: "Rejected an unrelated request previously",
        ar: "رفضوا طلباً سابقاً غير ذي صلة",
      },
      {
        en: "Agreed to an unrelated request previously",
        ar: "وافقوا على طلب سابق غير ذي صلة",
      },
    ],
  },
  {
    value: {
      en: "Employees are more likely to stick with commitments that are made...",
      ar: "من المرجح أن يلتزم الموظفون بالالتزامات التي تم تقديمها...",
    },
    correct_answer: {
      en: "Both A and C",
      ar: "كلاً من (A) و (C)",
    },
    wrong_answers: [
      {
        en: "In public",
        ar: "علناً",
      },
      {
        en: "In private",
        ar: "على انفراد",
      },
      {
        en: "Passively",
        ar: "بشكل طوعي",
      },
    ],
  },
  {
    value: {
      en: "A sales team holds meetings where teammates share their progress every week. At the end of each meeting, the leader asks them to share their goals on what they will achieve for the next week. Is this a good idea?",
      ar: "يعقد فريق المبيعات اجتماعات دورية حيث يشارك أفراد هذا الفريق تقدمهم في كل أسبوع. في نهاية كل اجتماع، يطلب قائد الفريق منهم مشاركة أهدافهم حول ما سينجزونه في الأسبوع المقبل. هل تعتبر فكرة جيدة؟",
    },
    correct_answer: {
      en: "Yes, because they share the goals in front of others",
      ar: "نعم، لأن أفراد الفريق يشاركون الأهداف أمام الآخرين",
    },
    wrong_answers: [
      {
        en: "Yes, because the goals are stated in the same location as where progress is reported",
        ar: "نعم، لأن الأهداف أعلنت في نفس المكان الذي تم فيه الحديث عن التقدم",
      },
      {
        en: "No, because they will become accustomed to making promises and become more comfortable breaking them",
        ar: "لا، لأن أفراد الفريق سوف يعتادون على تقديم الوعود ويستسهلون عدم انجازها",
      },
      {
        en: "No, because they will see many others also making promises, which reduces their sense of obligation",
        ar: "لا، لأن أفراد الفريق سيرون العديد من زملائهم يقدمون الوعود أيضاً، مما يقلل من إحساسهم بالالتزام",
      },
    ],
  },
  {
    value: {
      en: "Individuals are LESS likely to keep a commitment if they...",
      ar: "من غير المرجح أن يفي الأشخاص بالتزامهم إذا...",
    },
    correct_answer: {
      en: "Feel pressure to make the commitment",
      ar: "شعروا بالضغط لتقديم الالتزام",
    },
    wrong_answers: [
      {
        en: "Feel uncertain about the commitment",
        ar: "شعروا بعدم اليقين بشأن الالتزام",
      },
      {
        en: "Take a great deal of time to make the commitment",
        ar: "أخذوا قدراً كبيراً من الوقت لتقديم الالتزام",
      },
      {
        en: "Make the commitment in public",
        ar: "قدموا الالتزام علناً",
      },
    ],
  },
  {
    value: {
      en: "You purchase identical presents for all of your employees to thank them for putting in extra time on a project. Was buying the same gift for everyone a good idea?",
      ar: "قمت بشراء هدايا متطابقة لجميع موظفيك لشكرهم على بذلهم وقتاً إضافياً في مشروع ما. هل يعتبر شراء نفس الهدية للجميع فكرة جيدة؟",
    },
    correct_answer: {
      en: "No, the gifts will be considered less thoughtful than if they were tailored to each individual",
      ar: "كلاً، ستُعتبر الهدايا أقل قيمة مما لو كانت مهداة بشكل مخصص لكل موظف",
    },
    wrong_answers: [
      {
        en: "Yes, the time you save by getting identical presents will be worth it",
        ar: "نعم، لأنه يجب توفير الوقت من خلال شراء هدايا متطابقة",
      },
      {
        en: "Yes, your employees will not feel shortchanged, as long as all the presents are the same",
        ar: "نعم، لن يشعر موظفوك بالغبن طالما أن جميع الهدايا متطابقة",
      },
      {
        en: "No, there are hidden drawbacks to giving presents to employees",
        ar: "كلا، هناك سلبيات كامنة في تقديم الهدايا للموظفين",
      },
    ],
  },
  {
    value: {
      en: "To show your appreciation for your 20 best customers, you send them identical gifts. Is it a good idea that they were all the same?",
      ar: "لإظهار تقديرك لأفضل عشرون عميلاً من عملائك، قمت بإرسال هدايا متماثلة لهم. هل هي فكرة جيدة أن تكون جميعها متماثلة؟",
    },
    correct_answer: {
      en: "No, giving personalized gifts to each customer would be more meaningful",
      ar: "كلا، تقديم هدية مخصصة لكل عميل سيكون أكثر جدوى",
    },
    wrong_answers: [
      {
        en: "No, giving gifts to a customer is never a good idea",
        ar: "كلا، تقديم الهدايا للعميل ليس فكرة جيدة أبداً",
      },
      {
        en: "Yes, searching for a different gift for each customer is not worth the extra effort",
        ar: "نعم، البحث عن هدية مختلفة لكل عميل أمر غير مجدٍ ولا يستحق الجهد الإضافي",
      },
      {
        en: "Yes, giving identical gifts prevents any one customer from feeling like their gift was inferior",
        ar: "نعم، تقديم هدايا متماثلة يمنع شعور أي عميل بأن هديته أقل شأناً من الآخر",
      },
    ],
  },
  {
    value: {
      en: "Which action is most effective when we need to initiate, deepen, or repair a relationship with someone?",
      ar: "ما هو التصرف الأكثر تأثيراً عندما نحتاج إلى بدء أو توطيد أو إصلاح العلاقة مع شخص ما؟",
    },
    correct_answer: {
      en: "Do them a favour",
      ar: "إسداء معروف لهم",
    },
    wrong_answers: [
      {
        en: "Bring up points of agreement",
        ar: "إبراز نقاط الاتفاق",
      },
      {
        en: "Reduce uncertainty about why the relationship is important",
        ar: "تقليل الشكوك حول سبب أهمية العلاقة",
      },
      {
        en: "Mention how consistently you work with them",
        ar: "الإشارة إلى مدى إخلاصك في العمل معهم",
      },
    ],
  },
  {
    value: {
      en: "Which of the following acts as an investment that can pay back in pleasantly surprising ways?",
      ar: "أي مما يلي بمثابة استثمار قد يؤتي ثماره بطرق فعالة ومذهلة؟",
    },
    correct_answer: {
      en: "Gifts",
      ar: "الهدايا",
    },
    wrong_answers: [
      {
        en: "Rewards",
        ar: "المكافآت",
      },
      {
        en: "Bonuses",
        ar: "العلاوات",
      },
      {
        en: "High compensation.",
        ar: "التعويضات المجزية",
      },
      {
        en: "All of the above",
        ar: "جميع ما سبق",
      },
    ],
  },
  {
    value: {
      en: "Long-term behavioral change is more easily brought about by soliciting opinions from individuals who are...",
      ar: "يمكن إحداث تغيير في السلوك على المدى الطويل بسهولة أكبر من خلال مشاركة آراء الأشخاص الذين هم...",
    },
    correct_answer: {
      en: "Experts in a relevant field",
      ar: "خبراء في مجال ذي صلة",
    },
    wrong_answers: [
      {
        en: "Experts in an unrelated field",
        ar: "خبراء في مجال ليس له صلة",
      },
      {
        en: "(A) and (B)",
        ar: "(A) و (B)",
      },
      {
        en: "None of the above",
        ar: "لا شيء مما سبق",
      },
    ],
  },
  {
    value: {
      en: "A carmaker wants to use a testimonial to persuade buyers that their product is reliable. To create long-term customer relationships, who would be the best choice for such a testimonial?",
      ar: "يريد أحد صانعي السيارات استخدام التوصيات لإقناع المشترين بأن منتجه موثوق به. من سيكون الخيار الأفضل لمثل هذه التوصية لإنشاء علاقات طويلة الأمد مع العملاء؟",
    },
    correct_answer: {
      en: "A celebrity",
      ar: "أحد المشاهير",
    },
    wrong_answers: [
      {
        en: "An expert on the product",
        ar: "خبير في المنتج",
      },
      {
        en: "A professional actor",
        ar: "ممثل محترف",
      },
      {
        en: "A person who would be most in need of the product",
        ar: "الشخص الذي سيكون في أشد الحاجة إلى المنتج",
      },
    ],
  },
  {
    value: {
      en: "Individuals are more likely to follow your advice without fully considering the implications if you...",
      ar: "من المرجح أن يتبع الأفراد نصيحتك دون النظر بشكل كامل في الآثار المترتبة إذا كنت...",
    },
    correct_answer: {
      en: "A and B",
      ar: "(أ) و (ب)",
    },
    wrong_answers: [
      {
        en: "Are their direct manager",
        ar: "مديرهم المباشر",
      },
      {
        en: "Have earned a higher degree than them",
        ar: "قد حصلت على درجة أعلى منهم",
      },
      {
        en: "Are more open to new ideas than them",
        ar: "أكثر انفتاحاً منهم على الأفكار الجديدة",
      },
    ],
  },
  {
    value: {
      en: "A colleague is more likely to follow a group's",
      ar: "من المرجح أن يتبع الزميل في المجموعة سلوك المجموعة إذا كانت هذه المجموعة...",
    },
    correct_answer: {
      en: "Made up of a large number of people",
      ar: "تتكون من عدد كبير من الأفراد",
    },
    wrong_answers: [
      {
        en: "Performing an uncommon behaviour",
        ar: "تقوم بسلوك غير مألوف",
      },
      {
        en: "Behaving in an unpredictable manner",
        ar: "تتصرف بطريقة غير متوقعة",
      },
      {
        en: "Performing a behaviour but with some people not following the group",
        ar: "تقوم بسلوك معين مع وجود بعض الأشخاص الذين لا يتبعون هذه المجموعة",
      },
    ],
  },
  {
    value: {
      en: "Colleagues are more likely to follow the lead of another person who is...",
      ar: "من المرجح أن يتبع الزملاء خطى زميل آخر إذا كان ...",
    },
    correct_answer: {
      en: "Similar to them",
      ar: "مشابه لهم",
    },
    wrong_answers: [
      {
        en: "Behaving politely",
        ar: "يتصرف بأدب",
      },
      {
        en: "Unsure of the best next steps",
        ar: "غير متأكد ما هي أفضل الخطوات التالية",
      },
      {
        en: "Not following a larger group",
        ar: "لا يتبع لمجموعة أكبر",
      },
    ],
  },
  {
    value: {
      en: "Cindy is the Head of Sales for a firm that delivers quality improvement consulting. She is meeting with the CEO of a small semiconductor company who is considering hiring her firm. During the meeting, Cindy talks about other businesses who have been satisfied with her firm's work, and emphasizes testimonials from small businesses in the semiconductor industry. Was this an effective method?",
      ar: "هدى هي رئيسة المبيعات في شركة تقدم استشارات تحسين الجودة. وهي في اجتماع مع الرئيس التنفيذي لشركة صغيرة لأشباه الموصلات الذي يفكر في التعاقد مع شركتها. خلال الاجتماع، تحدثت هدى عن الشركات الأخرى التي أبدت رضاها عن عمل شركتها، وشددت على آراء وتقييمات الشركات الصغيرة في صناعة أشباه الموصلات. هل يعتبر ذلك أسلوباً فعالاً؟",
    },
    correct_answer: {
      en: "Yes, focusing on small business testimonials sends the message that similar companies have been happy with the firm's work",
      ar: "نعم، التركيز على تقييمات الشركات الصغيرة يبعث برسالة مفادها أن الشركات المماثلة لشركة العميل كانت سعيدة بعمل الشركة",
    },
    wrong_answers: [
      {
        en: "No, it is better for Cindy to describe past customer successes herself rather than rely on testimonials",
        ar: "لا، من الأفضل لهدى أن تصف نجاحات شركتها مع العملاء السابقين بنفسها بدلاً من الاعتماد على تقييمات الشركات",
      },
      {
        en: "No, emphasizing large business testimonials would make Cindy's firm seem more elite and sophisticated",
        ar: "لا، إن التركيز على تقييمات الشركات الكبيرة من شأنه أن يجعل شركة هدى تبدو أكثر احترافية وخبرة",
      },
    ],
  },
  {
    value: {
      en: "Andrew sells recreational vehicles. To sell these to someone who has never owned one, he talks about the multiple customers who have previously bought them. But before talking about past customers, he first asks the new customer how much they know about recreational vehicles. Is this a good question to ask?",
      ar: "يقوم سامر ببيع المركبات الترفيهية. ولبيعها لشخص لم يمتلكها من قبل، أخبره عن العديد من العملاء الذين اشتروها سابقاً. ولكن قبل الحديث عن العملاء السابقين، سأل العميل الجديد عن مدى معرفته بالمركبات الترفيهية. هل يعتبر هذا السؤال جيداً لطرحه على العميل في البداية؟",
    },
    correct_answer: {
      en: "Yes, because customers will likely realize their lack of relevant knowledge",
      ar: "نعم، لأنه من المحتمل أن يدرك العملاء افتقارهم إلى المعلومات ذات الصلة بالمنتج",
    },
    wrong_answers: [
      {
        en: "Yes, because it will push the customer to think more carefully about the decision",
        ar: "نعم، لأنه سيدفع العميل إلى التفكير بعناية أكبر في قرار الشراء",
      },
      {
        en: "No, because this will embarrass the customer",
        ar: "لا، لأن ذلك سيؤدي إلى إحراج العميل",
      },
      {
        en: "No, because the customer will see this as an irrelevant question",
        ar: "لا، لأن العميل سيرى هذا السؤال على أنه سؤال غير ذي صلة",
      },
    ],
  },
  {
    value: {
      en: "A hardware store is having a sale on overstocked power tools. The store advertises that the sale lasts for one week only. Is this a good strategy to make the power tools appealing to customers?",
      ar: "يقدم متجر أجهزة تخفيضات على الأدوات الكهربائية المكدّسة في المخزن. يعلن المتجر أن التخفيضات تستمر لمدة أسبوع واحد فقط. هل هذه استراتيجية جيدة لجعل الأدوات الكهربائية جاذبة للعملاء الذين سيقومون بشرائها؟",
    },
    correct_answer: {
      en: "Yes, people will want the power tools more, because they can only get the sale price for a limited time",
      ar: "نعم، سيرغب الناس في شراء هذه الأدوات الكهربائية بشكل أكبر، لأنهم لا يستطيعون الحصول على سعر التخفيض إلا لفترة محدودة",
    },
    wrong_answers: [
      {
        en: "Yes, people will want the power tools more, because they will believe many others are buying them",
        ar: "نعم، سيرغب الناس في شراء هذه الأدوات الكهربائية بشكل أكبر، لأنهم يعتقدون أن عدد كبير من الناس يشترونها في نفس الوقت",
      },
      {
        en: "No, it is better not to specify how long the sale will last, because people will delay their purchase and may decide against buying them during the delay",
        ar: "لا، الأفضل عدم تحديد الفترة التي يستمر فيها التخفيض، لأن الناس قد يؤجلون قرار شراء هذه الأدوات وربما يعدلون عن شرائها خلال تلك الفترة",
      },
      {
        en: "No, it is better not to specify how long the sale will last, because people may believe there is an even better price after the current sale ends",
        ar: "لا، من الأفضل عدم تحديد الفترة التي يستمر فيها التخفيض، لأن الناس قد يعتقدون أن هناك سعر أفضل بعد انتهاء التخفيض الحالي",
      },
    ],
  },
  {
    value: {
      en: "Many parents try to prevent their kids from seeing their boyfriends/girlfriends too much by restricting their access entirely. They use 'out of sight, out of mind' to back their reasoning. Do you think this strategy will work?",
      ar: 'يحاول العديد من الآباء منع أبنائهم من رؤية أصدقائهم/صديقاتهم بشكل كبير عن طريق مراقبة تحركاتهم وفرض القيود عليهم. حيث يستخدمون استراتيجية "البعيد عن العين بعيد عن القلب" لدعم حجتهم. ما رأيك هل تنفع هذه الاستراتيجية؟',
    },
    correct_answer: {
      en: "No, because limiting access to something will actually make it more appealing",
      ar: "لا، لأن تقييد الأبناء من الحصول على شيء ما سيجعله مرغوباً بشكل أكبر",
    },
    wrong_answers: [
      {
        en: "No, kids usually just do what they want",
        ar: "لا، عادة ما يفعل الأبناء ما يريدون فقط",
      },
      {
        en: "Yes, but the parents need enough authority to enforce the rules",
        ar: "نعم، ولكن يحتاج الوالدان عادةً الى السلطة الكافية لتطبيق القواعد",
      },
      {
        en: "Yes, but It makes the kids not like the parents anymore and less likely to listen to them",
        ar: "نعم، ولكنها قد تجعل الأطفال لا يحبون والديهم ويقلل احتمالية الاستماع إليهم",
      },
    ],
  },
  {
    value: {
      en: "Dr. Markum, a university professor in chemistry, is giving a lecture. The students have an exam next week, and all of the material in this lecture could be covered in the exam. When she gets to the last topic, Dr. Markum wants to make sure the students are paying attention. She mentions that this topic is not written in the textbook or lecture slides. Is this an effective method to get the students to pay attention?",
      ar: "تلقي الدكتورة هيام -وهي أستاذة جامعية في الكيمياء- محاضرة أمام طلابها. الطلاب لديهم امتحان في الأسبوع المقبل والذي من الممكن أن يشمل جميع ما تم شرحه في هذه المحاضرة. تريد الدكتورة هيام التأكد من شد انتباه الطلاب عندما تصل إلى الجزء الأخير من محاضرتها. وتخبرهم أن هذا الجزء غير مكتوب في الكتاب أو أوراق المحاضرة. هل هذه طريقة فعالة لشد انتباه الطلاب؟",
    },
    correct_answer: {
      en: "Yes, the students will realize that this information is not something they can get from other sources",
      ar: "نعم، سيدرك الطلاب أن هذه المعلومات ليست في متناول اليد ولا يمكنهم الحصول عليها من مصادر أخرى",
    },
    wrong_answers: [
      {
        en: "Yes, because the students like Dr. Markum and will take what she says seriously",
        ar: "نعم، الطلاب يحبون الدكتورة هيام لذلك سيأخذون ما تقوله على محمل الجد",
      },
      {
        en: "No, the students may not understand that this information is different",
        ar: "لا، قد لا يفهم الطلاب أن هذه المعلومات مختلفة",
      },
      {
        en: "No, the students might not remember what she said because she has been talking throughout the lecture",
        ar: "لا، ربما لن يتذكر الطلاب ما قالته لأنها كانت تتحدث طوال المحاضرة",
      },
    ],
  },
  {
    value: {
      en: "A grocery store is promoting the sale of its own brand of potato chips. What is the best way to advertise the discounts they offer in their flyers?",
      ar: "يحاول محل بقالة الترويج لبيع رقائق البطاطس الخاصة به. ما هي أفضل طريقة للإعلان عن التخفيضات التي يقدمونها في منشوراتهم؟",
    },
    correct_answer: {
      en: "For a limited time only - 50% off on chips!",
      ar: "العرض لفترة محدودة فقط- خصم 50% على الرقائق!",
    },
    wrong_answers: [
      {
        en: "Best sale ever - 50% off on chips!",
        ar: "أفضل المبيعات على الإطلاق - خصم 50% على الرقائق!",
      },
      {
        en: "You know you want to try our chips - now 50% off!",
        ar: "أنت تعلم أنك تريد تجربة رقائق البطاطس الخاصة بنا - الآن خصم 50%!",
      },
      {
        en: "These chips are the best in [city] - now on sale for 50% off!",
        ar: "هذه الرقائق هي الأفضل في [المدينة] - معروضة للبيع الآن بخصم 50%!",
      },
    ],
  },
];

const workbookAr = xlsx.readFile("./constans/AR_data_with_answers.xlsx");
const workbookEn = xlsx.readFile("./constans/EN_data_with_answers.xlsx");

// Access Worksheet
const worksheetAr = workbookAr.Sheets[workbookAr.SheetNames[0]];
const worksheetEn = workbookEn.Sheets[workbookEn.SheetNames[0]];

// Convert Worksheet to JSON
const dataAr = xlsx.utils.sheet_to_json(worksheetAr);
const dataEn = xlsx.utils.sheet_to_json(worksheetEn);

dataAr.forEach((row, i, arr) => {
  beginner[i].value = { ar: dataAr[i]["questions"], en: `` };
  beginner[i].correct_answer = { ar: dataAr[i]["correct answer"], en: `` };
  for (let j = 0; j < 4; j++) {
    if (dataAr[i]["answer " + (j + 1)]) {
      if (!!beginner[i]?.wrong_answers[j]?.ar) {
        beginner[i].wrong_answers[j].ar = dataAr[i]["answer " + (j + 1)];
      } else {
        beginner[i].wrong_answers[j] = { ar: dataAr[i]["answer " + (j + 1)], en: `` };
      }
    }
  }
});
dataEn.forEach((row, i, arr) => {
  beginner[i].value.en = dataEn[i]["questions"];
  beginner[i].correct_answer.en = dataEn[i]["correct answer"];
  for (let j = 0; j < 4; j++) {
    if (dataEn[i]["answer " + (j + 1)]) {
      if (!!beginner[i]?.wrong_answers[j]?.en) {
        beginner[i].wrong_answers[j].en = dataEn[i]["answer " + (j + 1)];
      } else {
        beginner[i].wrong_answers[j] = {
          ar: beginner[i].wrong_answers[j]?.ar,
          en: dataEn[i]["answer " + (j + 1)],
        };
      }
    }
  }
});

beginner.forEach((ele) => {
  ele.wrong_answers.forEach((e) => {
    if(!e?.en){
      console.log(e.en);
      console.log(ele);

    }
  });
});
// console.log();
module.exports.beginner = beginner;
