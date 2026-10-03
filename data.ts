import { LinguisticSection, QuizQuestion } from './types';

export const linguisticSections: LinguisticSection[] = [
  {
    id: 'sec-1',
    number: '1',
    titleEs: '¿Qué significa «la lengua como sistema»?',
    titleHy: 'Ի՞նչ է նշանակում «լեզուն որպես համակարգ»',
    category: 'concept',
    items: [
      {
        id: 's1-1',
        type: 'text',
        es: 'La lengua es un sistema organizado de signos y reglas que una comunidad utiliza para comunicarse.',
        hy: 'Լեզուն նշանների և կանոնների կազմակերպված համակարգ է, որը մարդկանց մի խումբ օգտագործում է հաղորդակցվելու համար։',
        highlight: ['sistema', 'signos y reglas', 'համակարգ', 'նշանների և կանոնների']
      },
      {
        id: 's1-2',
        type: 'text',
        es: 'Se considera un sistema porque todos sus elementos están relacionados entre sí y funcionan siguiendo unas reglas.',
        hy: 'Այն կոչվում է համակարգ, որովհետև լեզվի բոլոր տարրերը կապված են միմյանց հետ և գործում են որոշակի կանոններով։',
        highlight: ['relacionados entre sí', 'reglas', 'կապված են միմյանց հետ', 'կանոններով']
      },
      {
        id: 's1-3',
        type: 'rule',
        es: 'Por ejemplo, para formar una oración correcta no podemos colocar las palabras de cualquier manera:',
        hy: 'Օրինակ՝ ճիշտ նախադասություն կազմելու համար մենք չենք կարող բառերը տեղադրել ինչպես պատահի.'
      },
      {
        id: 's1-4',
        type: 'correct',
        es: 'María compra un libro.',
        hy: 'Մարիան գիրք է գնում։',
        note: {
          es: 'Oración correcta: respeta las reglas del sistema de la lengua.',
          hy: 'Ճիշտ տարբերակ՝ համապատասխանում է լեզվի համակարգի կանոններին։'
        }
      },
      {
        id: 's1-5',
        type: 'incorrect',
        es: 'Libro María un compra.',
        hy: 'Գիրք Մարիա մի գնում (սխալ շարադասություն)։',
        note: {
          es: 'Oración incorrecta: no respeta las reglas del sistema de la lengua.',
          hy: 'Սխալ տարբերակ՝ չի համապատասխանում լեզվի կանոններին։'
        }
      },
      {
        id: 's1-6',
        type: 'text',
        es: 'Las mismas palabras aparecen, pero solo la primera oración respeta las reglas del sistema de la lengua.',
        hy: 'Երկու դեպքում էլ նույն բառերն են, բայց միայն առաջին տարբերակն է համապատասխանում լեզվի կանոններին։'
      }
    ]
  },
  {
    id: 'sec-2',
    number: '2',
    titleEs: 'Los signos lingüísticos',
    titleHy: 'Լեզվական նշանները',
    category: 'sign',
    extraWidget: 'sign-diagram',
    items: [
      {
        id: 's2-1',
        type: 'text',
        es: 'La lengua está formada por signos lingüísticos. Un signo lingüístico relaciona una forma o palabra con un significado.',
        hy: 'Լեզուն կազմված է լեզվական նշաններից։ Լեզվական նշանը միավորում է բառի ձևը և նրա իմաստը։',
        highlight: ['signos lingüísticos', 'forma', 'significado', 'լեզվական նշաններից', 'ձևը', 'իմաստը']
      },
      {
        id: 's2-2',
        type: 'example',
        es: 'casa → palabra que utilizamos para referirnos al lugar donde vive una persona.',
        hy: 'casa → բառ է, որը նշանակում է տուն (վայր, որտեղ ապրում է մարդը)։'
      },
      {
        id: 's2-3',
        type: 'breakdown',
        es: 'La palabra «casa» tiene dos caras inseparables:',
        hy: '«casa» բառն ունի երկու անբաժանելի կողմ.',
        breakdownParts: [
          {
            part: 'significante (նշանակիչ)',
            roleEs: 'la forma que escuchamos o escribimos: c-a-s-a (sonido y grafía)',
            roleHy: 'բառի հնչյունական կամ գրավոր ձևը՝ c-a-s-a'
          },
          {
            part: 'significado (նշանակություն)',
            roleEs: 'la idea o concepto mental que tenemos de una casa',
            roleHy: '«տուն» հասկացությունը, մտապատկերը'
          }
        ]
      }
    ]
  },
  {
    id: 'sec-3',
    number: '3',
    titleEs: 'Los niveles de la lengua — A. Nivel fónico',
    titleHy: 'Լեզվի մակարդակները — A. Հնչյունական մակարդակ',
    category: 'levels',
    items: [
      {
        id: 's3-1',
        type: 'text',
        es: 'La lengua se puede estudiar en diferentes niveles. El primero es el Nivel Fónico.',
        hy: 'Լեզվի համակարգը կարելի է ուսումնասիրել տարբեր մակարդակներով։ Առաջինը հնչյունական մակարդակն է։'
      },
      {
        id: 's3-2',
        type: 'text',
        es: 'Estudia los sonidos y fonemas de una lengua.',
        hy: 'Հնչյունական մակարդակը ուսումնասիրում է լեզվի հնչյուններն ու հնչույթները։',
        highlight: ['sonidos y fonemas', 'հնչյուններն ու հնչույթները']
      },
      {
        id: 's3-3',
        type: 'rule',
        es: 'Un fonema es la unidad mínima de sonido que puede diferenciar palabras.',
        hy: 'Fonema — հնչույթը լեզվի ամենափոքր հնչյունական միավորն է, որը կարող է տարբերել բառերի իմաստը։',
        highlight: ['unidad mínima de sonido', 'ամենափոքր հնչյունական միավորն']
      },
      {
        id: 's3-4',
        type: 'example',
        es: 'pala / mala',
        hy: 'pala (թիակ) / mala (վատ, չար)',
        note: {
          es: 'Solo cambia /p/ por /m/, pero cambia el significado de la palabra.',
          hy: 'Միայն մեկ հնչույթ է փոխվում (/p/ → /m/), բայց բառի իմաստը նույնպես փոխվում է։'
        }
      }
    ]
  },
  {
    id: 'sec-4',
    number: '4',
    titleEs: 'Nivel morfológico',
    titleHy: 'Ձևաբանական մակարդակ',
    category: 'levels',
    items: [
      {
        id: 's4-1',
        type: 'text',
        es: 'Estudia la forma y la estructura de las palabras, así como sus cambios de género, número, persona, tiempo, etc.',
        hy: 'Ձևաբանական մակարդակը ուսումնասիրում է բառերի կառուցվածքն ու ձևերի փոփոխությունները՝ ըստ սեռի, թվի, դեմքի, ժամանակի և այլ քերականական հատկանիշների։',
        highlight: ['forma y estructura', 'género, número, persona, tiempo', 'կառուցվածքն ու ձևերի փոփոխությունները']
      },
      {
        id: 's4-2',
        type: 'example',
        es: 'niño → niña → niños → niñas',
        hy: 'տղա → աղջիկ → տղաներ → աղջիկներ',
        note: {
          es: 'La palabra cambia para expresar género (masculino/femenino) y número (singular/plural).',
          hy: 'Բառը փոխվում է՝ ցույց տալով սեռ (արական/իգական) և թիվ (եզակի/հոգնակի)։'
        }
      },
      {
        id: 's4-3',
        type: 'example',
        es: 'hablo – hablas – habla – hablamos',
        hy: 'խոսում եմ – խոսում ես – խոսում է – խոսում ենք',
        note: {
          es: 'El verbo cambia según la persona gramatical (primera, segunda, tercera).',
          hy: 'Բայը փոխվում է ըստ դեմքի (առաջին, երկրորդ, երրորդ)։'
        }
      }
    ]
  },
  {
    id: 'sec-5',
    number: '5',
    titleEs: 'Morfema',
    titleHy: 'Ձևույթ',
    category: 'levels',
    extraWidget: 'morpheme',
    items: [
      {
        id: 's5-1',
        type: 'rule',
        es: 'El morfema es la unidad mínima de una palabra que tiene significado o función gramatical.',
        hy: 'Morfema — ձևույթը բառի ամենափոքր մասն է, որն ունի իմաստ կամ քերականական գործառույթ։',
        highlight: ['unidad mínima', 'significado o función gramatical', 'ամենափոքր մասն', 'իմաստ կամ քերականական']
      },
      {
        id: 's5-2',
        type: 'breakdown',
        es: 'Ejemplo de descomposición morfemática: niñ-a-s',
        hy: 'Ձևույթների բաժանման օրինակ՝ niñ-a-s (աղջիկներ)',
        breakdownParts: [
          {
            part: 'niñ-',
            roleEs: 'raíz o lexema (parte principal de la palabra con significado léxico)',
            roleHy: 'արմատ (բառի հիմնական մասը, որը կրում է հիմնական իմաստը)'
          },
          {
            part: '-a',
            roleEs: 'morfema flexivo de género femenino',
            roleHy: 'իգական սեռ ցույց տվող քերականական ձևույթ'
          },
          {
            part: '-s',
            roleEs: 'morfema flexivo de número plural',
            roleHy: 'հոգնակի թիվ ցույց տվող քերականական ձևույթ'
          }
        ]
      }
    ]
  },
  {
    id: 'sec-6',
    number: '6',
    titleEs: 'Nivel sintáctico',
    titleHy: 'Շարահյուսական մակարդակ',
    category: 'levels',
    extraWidget: 'syntax',
    items: [
      {
        id: 's6-1',
        type: 'text',
        es: 'Estudia cómo se combinan las palabras para formar grupos de palabras (sintagmas) y oraciones.',
        hy: 'Շարահյուսական մակարդակը ուսումնասիրում է, թե ինչպես են բառերը միանում և կազմում բառակապակցություններ ու նախադասություններ։',
        highlight: ['combinan las palabras', 'grupos de palabras y oraciones', 'բառակապակցություններ ու նախադասություններ']
      },
      {
        id: 's6-2',
        type: 'example',
        es: 'Mi hermano compra una bicicleta nueva.',
        hy: 'Իմ եղբայրը նոր հեծանիվ է գնում։'
      },
      {
        id: 's6-3',
        type: 'breakdown',
        es: 'Las palabras tienen una organización sintáctica concreta:',
        hy: 'Բառերն ունեն հստակ շարահյուսական կառուցվածք.',
        breakdownParts: [
          {
            part: 'Mi hermano',
            roleEs: 'Sujeto (quien realiza la acción)',
            roleHy: 'Ենթակա (ով է կատարում գործողությունը)'
          },
          {
            part: 'compra una bicicleta nueva',
            roleEs: 'Predicado (lo que se dice del sujeto)',
            roleHy: 'Ստորոգյալ (ինչ է ասվում ենթակայի մասին)'
          }
        ]
      }
    ]
  },
  {
    id: 'sec-7',
    number: '7',
    titleEs: 'Nivel léxico-semántico',
    titleHy: 'Բառային-իմաստաբանական մակարդակ',
    category: 'levels',
    items: [
      {
        id: 's7-1',
        type: 'text',
        es: 'Estudia el significado de las palabras y las relaciones que existen entre ellas.',
        hy: 'Բառային-իմաստաբանական մակարդակը ուսումնասիրում է բառերի իմաստները և նրանց միջև եղած հարաբերությունները։',
        highlight: ['significado de las palabras', 'relaciones', 'բառերի իմաստները']
      },
      {
        id: 's7-2',
        type: 'example',
        es: 'feliz – contento',
        hy: 'ուրախ – գոհ',
        note: {
          es: 'Sinónimos: palabras de significado parecido.',
          hy: 'Հոմանիշներ՝ մոտ իմաստ ունեցող բառեր։'
        }
      },
      {
        id: 's7-3',
        type: 'example',
        es: 'grande – pequeño',
        hy: 'մեծ – փոքր',
        note: {
          es: 'Antónimos: palabras de significado contrario.',
          hy: 'Հականիշներ՝ հակադիր իմաստ ունեցող բառեր։'
        }
      },
      {
        id: 's7-4',
        type: 'breakdown',
        es: 'Polisemia: Una misma palabra también puede tener varios significados:',
        hy: 'Բազմիմաստություն՝ նույն բառը կարող է ունենալ մի քանի նշանակություն.',
        breakdownParts: [
          {
            part: 'banco (1)',
            roleEs: 'una entidad financiera donde se guarda dinero',
            roleHy: 'բանկ (ֆինանսական հաստատություն)'
          },
          {
            part: 'banco (2)',
            roleEs: 'un asiento para sentarse en la calle o parque',
            roleHy: 'նստարան (նստելու տեղ)'
          }
        ]
      }
    ]
  },
  {
    id: 'sec-8',
    number: '8',
    titleEs: 'Las unidades de la lengua',
    titleHy: 'Լեզվի միավորները',
    category: 'units',
    extraWidget: 'units-chain',
    items: [
      {
        id: 's8-1',
        type: 'rule',
        es: 'Las unidades se organizan desde las más pequeñas hasta las más grandes: fonema → morfema → palabra → sintagma → oración → texto',
        hy: 'Լեզվի միավորները դասավորվում են փոքրից դեպի մեծ՝ հնչույթ → ձևույթ → բառ → բառակապակցություն → նախադասություն → տեքստ'
      },
      {
        id: 's8-2',
        type: 'breakdown',
        es: 'Ejemplo completo de la jerarquía lingüística:',
        hy: 'Լեզվական սանդուղքի ամբողջական օրինակը.',
        breakdownParts: [
          {
            part: '/m/',
            roleEs: 'fonema (unidad mínima de sonido)',
            roleHy: 'հնչույթ (ամենափոքր հնչյունական միավոր)'
          },
          {
            part: 'niñ-a-s',
            roleEs: 'morfemas (unidades con significado gramatical)',
            roleHy: 'ձևույթներ (իմաստ կամ քերականական դեր ունեցող մասեր)'
          },
          {
            part: 'niñas',
            roleEs: 'palabra (unidad léxica independiente)',
            roleHy: 'բառ (ինքնուրույն բառային միավոր)'
          },
          {
            part: 'las niñas',
            roleEs: 'sintagma (grupo coordinado de palabras)',
            roleHy: 'բառակապակցություն (բառերի կապակցություն)'
          },
          {
            part: 'Las niñas juegan.',
            roleEs: 'oración (pensamiento completo con verbo)',
            roleHy: 'նախադասություն (ավարտուն միտք՝ բայով)'
          },
          {
            part: 'Varias oraciones relacionadas',
            roleEs: 'texto (unidad máxima de comunicación)',
            roleHy: 'տեքստ (հաղորդակցման առավելագույն ամբողջական միավոր)'
          }
        ]
      }
    ]
  },
  {
    id: 'sec-9',
    number: '9',
    titleEs: '¿Por qué decimos que es un sistema?',
    titleHy: 'Ինչո՞ւ ենք ասում, որ լեզուն համակարգ է',
    category: 'system',
    items: [
      {
        id: 's9-1',
        type: 'text',
        es: 'Porque sus elementos no funcionan de manera aislada. Todos están relacionados.',
        hy: 'Որովհետև լեզվի տարրերը առանձին չեն գործում։ Դրանք բոլորը փոխկապակցված են։',
        highlight: ['no funcionan de manera aislada', 'Todos están relacionados', 'առանձին չեն գործում', 'փոխկապակցված են']
      },
      {
        id: 's9-2',
        type: 'rule',
        es: 'Los sonidos forman palabras. Las palabras forman sintagmas. Los sintagmas forman oraciones. Las oraciones forman textos.',
        hy: 'Հնչույթներից կազմվում են բառեր։ Բառերից՝ բառակապակցություններ։ Բառակապակցություններից՝ նախադասություններ։ Նախադասություններից՝ տեքստեր։'
      },
      {
        id: 's9-3',
        type: 'text',
        es: 'Además, todo funciona siguiendo reglas.',
        hy: 'Այս ամենը կատարվում է որոշակի կանոններով։'
      }
    ]
  },
  {
    id: 'sec-summary',
    number: '10',
    titleEs: 'Para recordar & Muy corto para el examen',
    titleHy: 'Հիշելու համար & Շատ կարճ՝ քննության համար',
    category: 'summary',
    items: [
      {
        id: 'sum-1',
        type: 'rule',
        es: '🧠 Para recordar: La lengua es un sistema de signos organizado mediante reglas. Sus principales niveles son: fónico, morfológico, sintáctico y léxico-semántico.',
        hy: '🧠 Հիշելու համար. Լեզուն կանոններով կազմակերպված նշանների համակարգ է։ Նրա հիմնական մակարդակներն են՝ հնչյունական, ձևաբանական, շարահյուսական և բառային-իմաստաբանական։'
      },
      {
        id: 'sum-2',
        type: 'rule',
        es: '📝 Muy corto para el examen: La lengua es un sistema porque sus elementos están relacionados y funcionan según unas reglas. Se organiza en diferentes niveles: fónico, morfológico, sintáctico y léxico-semántico.',
        hy: '📝 Շատ կարճ՝ քննության համար. Լեզուն համակարգ է, որովհետև նրա տարրերը կապված են միմյանց հետ և գործում են կանոնների համաձայն։ Այն ունի հնչյունական, ձևաբանական, շարահյուսական և բառային-իմաստաբանական մակարդակներ։'
      }
    ]
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    questionEs: '¿Por qué se considera la lengua como un «sistema»?',
    questionHy: 'Ինչո՞ւ է լեզուն համարվում «համակարգ»:',
    options: [
      {
        id: 'a',
        textEs: 'Porque las palabras no tienen ninguna regla fija.',
        textHy: 'Որովհետև բառերը չունեն որևէ հաստատուն կանոն։'
      },
      {
        id: 'b',
        textEs: 'Porque todos sus elementos están relacionados entre sí y siguen reglas.',
        textHy: 'Որովհետև նրա բոլոր տարրերը փոխկապակցված են և գործում են կանոններով։'
      },
      {
        id: 'c',
        textEs: 'Porque solo existe en forma escrita.',
        textHy: 'Որովհետև այն գոյություն ունի միայն գրավոր ձևով։'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'La lengua es un sistema porque sus elementos están interconectados y obedecen a reglas gramaticales fijas.',
    explanationHy: 'Լեզուն համակարգ է, որովհետև նրա բոլոր տարրերը կապված են միմյանց հետ և ենթարկվում են որոշակի կանոնների։'
  },
  {
    id: 'q2',
    questionEs: 'En el signo lingüístico «casa», ¿cuál es el significante?',
    questionHy: '«casa» լեզվական նշանի մեջ ո՞րն է նշանակիչը (significante):',
    options: [
      {
        id: 'a',
        textEs: 'El concepto mental del edificio donde vivimos.',
        textHy: 'Այն շենքի մտապատկերը, որտեղ մենք ապրում ենք։'
      },
      {
        id: 'b',
        textEs: 'La forma sonora o escrita: c-a-s-a.',
        textHy: 'Հնչյունական կամ գրավոր ձևը՝ c-a-s-a:'
      },
      {
        id: 'c',
        textEs: 'El precio de la vivienda en el mercado.',
        textHy: 'Բնակարանի գինը շուկայում։'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'El significante es la imagen acústica o forma escrita (c-a-s-a), mientras que el significado es la idea o concepto mental.',
    explanationHy: 'Նշանակիչը (significante) բառի հնչյունական կամ գրավոր ձևն է (c-a-s-a), իսկ նշանակությունը՝ մտապատկերը։'
  },
  {
    id: 'q3',
    questionEs: '¿Qué es un fonema?',
    questionHy: 'Ի՞նչ է հնչույթը (fonema):',
    options: [
      {
        id: 'a',
        textEs: 'La unidad mínima de sonido que puede diferenciar palabras (ej. pala / mala).',
        textHy: 'Հնչյունական ամենափոքր միավորը, որը կարող է տարբերել բառերի իմաստը (օր. pala / mala)։'
      },
      {
        id: 'b',
        textEs: 'Una oración completa con sujeto y predicado.',
        textHy: 'Ամբողջական նախադասություն՝ ենթակայով և ստորոգյալով։'
      },
      {
        id: 'c',
        textEs: 'Un conjunto de textos literarios.',
        textHy: 'Գրական տեքստերի ամբողջություն։'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'Un fonema es la unidad fónica mínima abstracta capaz de distinguir significados.',
    explanationHy: 'Հնչույթը ամենափոքր հնչյունական միավորն է, որի փոփոխությամբ փոխվում է բառի իմաստը։'
  },
  {
    id: 'q4',
    questionEs: 'En la palabra «niñas», ¿qué función cumple el morfema «-a»?',
    questionHy: '«niñas» բառի մեջ ի՞նչ գործառույթ ունի «-a» ձևույթը:',
    options: [
      {
        id: 'a',
        textEs: 'Indica número plural.',
        textHy: 'Ցույց է տալիս հոգնակի թիվ։'
      },
      {
        id: 'b',
        textEs: 'Indica género femenino.',
        textHy: 'Ցույց է տալիս իգական սեռ։'
      },
      {
        id: 'c',
        textEs: 'Es la raíz principal de la palabra.',
        textHy: 'Բառի հիմնական արմատն է։'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'En «niñ-a-s», «niñ-» es la raíz, «-a» marca el género femenino y «-s» marca el número plural.',
    explanationHy: '«niñ-a-s»-ի մեջ «niñ-» արմատն է, «-a»-ն իգական սեռի ցուցիչն է, իսկ «-s»-ը՝ հոգնակի թվի։'
  },
  {
    id: 'q5',
    questionEs: 'En «Mi hermano compra una bicicleta nueva», ¿qué parte es el Sujeto?',
    questionHy: '«Mi hermano compra una bicicleta nueva» նախադասության մեջ ո՞ր մասն է ենթական (Sujeto):',
    options: [
      {
        id: 'a',
        textEs: 'compra una bicicleta nueva',
        textHy: 'compra una bicicleta nueva'
      },
      {
        id: 'b',
        textEs: 'Mi hermano',
        textHy: 'Mi hermano (Իմ եղբայրը)'
      },
      {
        id: 'c',
        textEs: 'bicicleta',
        textHy: 'bicicleta'
      }
    ],
    correctOptionId: 'b',
    explanationEs: '«Mi hermano» es el sujeto que realiza la acción, mientras que «compra una bicicleta nueva» es el predicado.',
    explanationHy: '«Mi hermano»-ն ենթական է (ով է գործողություն կատարում), իսկ մնացածը՝ ստորոգյալը։'
  },
  {
    id: 'q6',
    questionEs: '¿Cuál es el orden correcto de las unidades de la lengua de menor a mayor?',
    questionHy: 'Ո՞րն է լեզվի միավորների ճիշտ հերթականությունը՝ փոքրից դեպի մեծ:',
    options: [
      {
        id: 'a',
        textEs: 'oración → sintagma → palabra → morfema → fonema → texto',
        textHy: 'նախադասություն → բառակապակցություն → բառ → ձևույթ → հնչույթ → տեքստ'
      },
      {
        id: 'b',
        textEs: 'fonema → morfema → palabra → sintagma → oración → texto',
        textHy: 'հնչույթ → ձևույթ → բառ → բառակապակցություն → նախադասություն → տեքստ'
      },
      {
        id: 'c',
        textEs: 'palabra → fonema → morfema → texto → oración → sintagma',
        textHy: 'բառ → հնչույթ → ձևույթ → տեքստ → նախադասություն → բառակապակցություն'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'El orden de menor a mayor complejidad es: fonema → morfema → palabra → sintagma → oración → texto.',
    explanationHy: 'Փոքրից մեծ ճիշտ կարգն է՝ fonema (հնչույթ) → morfema (ձևույթ) → palabra (բառ) → sintagma (բառակապակցություն) → oración (նախադասություն) → texto (տեքստ)։'
  }
];

export const unitLadder = [
  {
    level: 1,
    titleEs: 'Fonema',
    titleHy: 'Հնչույթ',
    exampleEs: '/m/',
    exampleHy: '«մ» հնչյունային միավոր',
    descEs: 'Unidad mínima de sonido sin significado, capaz de diferenciar palabras.',
    descHy: 'Հնչյունական ամենափոքր միավորն է առանց ինքնուրույն իմաստի, բայց տարբերակիչ դերով։'
  },
  {
    level: 2,
    titleEs: 'Morfema',
    titleHy: 'Ձևույթ',
    exampleEs: 'niñ- + -a + -s',
    exampleHy: 'արմատ + իգ. սեռ + հոգնակի թիվ',
    descEs: 'Unidad mínima con significado léxico o función gramatical.',
    descHy: 'Իմաստ կամ քերականական գործառույթ ունեցող ամենափոքր միավորն է։'
  },
  {
    level: 3,
    titleEs: 'Palabra',
    titleHy: 'Բառ',
    exampleEs: 'niñas',
    exampleHy: 'աղջիկներ',
    descEs: 'Unidad léxica dotada de significado e independencia sintáctica.',
    descHy: 'Ինքնուրույն իմաստ ունեցող բառային միավոր։'
  },
  {
    level: 4,
    titleEs: 'Sintagma',
    titleHy: 'Բառակապակցություն',
    exampleEs: 'las niñas',
    exampleHy: 'աղջիկները',
    descEs: 'Grupo articulado de palabras organizadas en torno a un núcleo.',
    descHy: 'Բառերի կապակցություն, որոնք խմբավորված են մեկ հիմնական բառի շուրջ։'
  },
  {
    level: 5,
    titleEs: 'Oración',
    titleHy: 'Նախադասություն',
    exampleEs: 'Las niñas juegan.',
    exampleHy: 'Աղջիկները խաղում են։',
    descEs: 'Estructura sintáctica con autonomía comunicativa y sentido completo.',
    descHy: 'Շարահյուսական կառույց՝ ամբողջական մտքով և ստորոգյալով։'
  },
  {
    level: 6,
    titleEs: 'Texto',
    titleHy: 'Տեքստ',
    exampleEs: 'Las niñas juegan en el parque bajo el sol cálido...',
    exampleHy: 'Աղջիկները խաղում են այգում տաք արևի ներքո...',
    descEs: 'Unidad máxima de comunicación lingüística con coherencia y cohesión.',
    descHy: 'Հաղորդակցման ամենամեծ միավորը՝ տրամաբանական կապով և ամբողջականությամբ։'
  }
];
