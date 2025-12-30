import { Question } from '../../types';

export const clinicaQuestions: Question[] = [
  {
    id: "cl1",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 85 anos de idade é internado em Unidade de Terapia Intensiva com quadro de pneumonia bacteriana comunitária. O paciente é portador de demência de Alzheimer, hipertensão e diabetes. Na admissão foi evidenciado que o paciente apresentava, há três dias, alteração de comportamento, alternando períodos de agitação com hipoatividade, flutuação do nível de consciência ao longo do dia e déficit de atenção. Qual é o diagnóstico mais provável desse paciente?",
    options: ['Depressão maior.', 'Delirium misto.', 'Psicose não orgânica.', 'Evolução da demência.'],
    correctAnswer: 1,
    explanation: "O quadro clínico é compatível com delirium, por apresentar início agudo, evolução flutuante, desatenção e alteração no nível de consciência, sendo a demência de Alzheimer um fator predisponente e a pneumonia um fator desencadeante. A alternância entre agitação (hiperatividade) e hipoatividade define o delirium misto."
  },
  {
    id: "cl2",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 18 anos de idade queixa-se de perda de peso, palpitações e agitação psicomotora há dois meses. Exame físico: PA = 130 x 60 mmHg, FC = 132 bpm, tremores finos de extremidades e tireoide aumentada difusamente de volume, indolor, com temperatura local elevada e sopro tireoidiano, além de proptose bilateral sem sinais flogísticos oculares. Exames laboratoriais: TSH = 0,01 mcUI/ml; T4 livre = 2,5 ng/dL; T3 = 268 ng/dL. Qual o diagnóstico provável?",
    options: ['Doença de Plummer.', 'Tireoidite linfocítica subaguda.', 'Doença de Graves.', 'Tireoidite granulomatosa subaguda.'],
    correctAnswer: 2,
    explanation: "A Doença de Graves é a causa mais comum de hipertireoidismo e se caracteriza pela tríade bócio difuso, oftalmopatia (proptose) e, em alguns casos, dermopatia. O quadro laboratorial mostra TSH suprimido e T3/T4 elevados, e o exame físico com sopro tireoidiano e tremores confirma tireotoxicose."
  },
  {
    id: "cl3",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 50 anos de idade, portador de hipertensão, dislipidemia e diabetes mellitus tipo 2, é admitido no Pronto Socorro com quadro de confusão. Exames de admissão: glicemia = 650 mg/dL; K+ = 2,5 mEq/L; Bicarbonato sérico: 22 mEq/L. Enquanto o paciente aguarda vaga na Unidade de Terapia Intensiva, qual dentre as medidas para controle da glicemia deve ser adotada?",
    options: ['Insulina regular intravenosa contínua.', 'Insulina regular intramuscular a cada 1 hora.', 'Não iniciar insulinização até a normalização do potássio.', 'Análogo de insulina ultrarrápida subcutânea a cada 1 hora.'],
    correctAnswer: 2,
    explanation: "O paciente apresenta hiperglicemia e hipopotassemia grave (K+ = 2,5 mEq/L). A insulina promove entrada de potássio nas células, piorando a hipocalemia e aumentando o risco de arritmias. Assim, a insulinização só deve ser iniciada após correção do potássio para valores > 3,3 mEq/L."
  },
  {
    id: "cl4",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 56 anos de idade, tabagista, procura atendimento por febre, tosse com escarro purulento e dor torácica há 5 dias. Exame físico e sinais vitais normais para idade. Não apresenta confusão, FR < 30 irpm, PA > 90/60 mmHg. Baseado no sistema CRB-65 (pontuação zero), qual é a conduta inicial mais apropriada?",
    options: ['Iniciar tratamento ambulatorial com amoxicilina + clavulanato; programar retorno em 3 dias.', 'Solicitar TC de tórax para definir conduta terapêutica.', 'Iniciar corticoterapia e tratamento com ceftriaxona.', 'Encaminhar o paciente para internação e tratamento.'],
    correctAnswer: 0,
    explanation: "Com CRB-65 = 0 (sem confusão, FR < 30, PA estável e idade < 65 anos), o paciente é considerado de baixo risco para mortalidade na pneumonia adquirida na comunidade. A conduta é tratamento ambulatorial, sendo amoxicilina + clavulanato opção adequada."
  },
  {
    id: "cl5",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 26 anos de idade, sem comorbidades, procura atendimento ambulatorial com queixa de disúria, polaciúria e opergência urinária há 2 dias. Nega febre ou dor lombar. Ao exame físico, está afebril e sem dor à palpação lombar. Qual é a conduta mais adequada?",
    options: ['Prescrever nitrofurantoína por 5 dias.', 'Prescrever norfloxacina por 3 dias e, ao final, coletar urocultura de controle.', 'Solicitar urocultura e, após resultado, avaliar início do antibiótico.', 'Prescrever fosfomicina por 4 dias.'],
    correctAnswer: 0,
    explanation: "Quadro típico de cistite aguda não complicada: mulher jovem, sem comorbidades e sem sinais de pielonefrite. O tratamento empírico de primeira linha é nitrofurantoína por 5 dias, sem necessidade de urocultura de rotina."
  },
  {
    id: "cl6",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 40 anos, portadora de diabetes mellitus tipo 1, procura atendimento com fraqueza muscular progressiva e mal-estar, com vômitos e oligúria nas últimas 24 horas. Exames laboratoriais revelam: Ureia: 135 mg/dL, Creatinina: 5,2 mg/dL, Potássio sérico: 7,6 mEq/L, pH arterial: 7,24. Após medidas iniciais para hipercalemia sem melhora clínica, qual é a conduta mais adequada neste momento?",
    options: ['Repetir nova dose de insulina com glicose intravenosa.', 'Iniciar resina trocadora de potássio por via oral.', 'Iniciar hemodiálise de opergência.', 'Aguardar resposta às medidas já realizadas e monitorar potássio e ECG.'],
    correctAnswer: 2,
    explanation: "A paciente apresenta hipercalemia grave (K+ = 7,6 mEq/L) refratária às medidas habituais, associada a injúria renal aguda (creatinina 5,2 mg/dL). Nessa situação, há risco elevado de arritmias fatais e a conduta de escolha é hemodiálise de opergência para remoção rápida do potássio."
  },
  {
    id: "cl7",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 40 anos de idade, IMC = 37,5 kg/m², sedentário, tabagista, etilista, apresenta pressão arterial (PA) aferida em duas ocasiões de 150/70 mmHg. Qual a melhor conduta a ser adotada para esse paciente?",
    options: ['Reavaliar em 90 dias, uma vez que esses níveis pressóricos são aceitáveis.', 'Considerá-lo portador de hipertensão arterial e prescrever anti-hipertensivo(s).', 'Recomendar hábitos de vida saudáveis e acompanhar os níveis pressóricos.', 'Iniciar terapia com anti-hipertensivos e solicitar MAPA.'],
    correctAnswer: 2,
    explanation: "Há fatores de risco importantes (obesidade, tabagismo, etilismo), mas apenas duas medidas de PA ainda são insuficientes para definir hipertensão. A conduta inicial é orientar perda de peso, cessar tabagismo, reduzir álcool e acompanhar os níveis pressóricos."
  },
  {
    id: "cl8",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 48 anos de idade procura atendimento por dor musculoesquelética difusa há cerca de oito meses, acompanhada de fadiga intensa e sono não reparador. Exame físico: não há sinovite, deformidades articulares ou alterações neurológicas, sendo observada dor generalizada à palpação de pontos musculares dolorosos. Diante da hipótese de fibromialgia, qual é o critério mais adequado para confirmação diagnóstica nesse paciente?",
    options: ['Realização de eletroneuromiografia de membros superiores e inferiores.', 'Realização de pesquisa de autoanticorpos para investigação de doenças autoimunes.', 'Ausência de sinais inflamatórios ou estruturais ao exame físico.', 'Realização de ressonância magnética das articulações e da coluna.'],
    correctAnswer: 2,
    explanation: "A fibromialgia é uma síndrome de dor crônica não inflamatória nem degenerativa. A ausência de sinais inflamatórios e estruturais, na presença de dor generalizada, fadiga e sono não reparador, sustenta o diagnóstico em quadro típico, sem necessidade de exames sofisticados."
  },
  {
    id: "cl9",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 68 anos de idade com HIV, sem tratamento, internado em coma vigil por neurotoxoplasmose (lesão com captação em anel). Os familiares solicitam que \"tudo seja feito até o fim\", mas a equipe considera a transição para cuidados paliativos. Diante deste cenário, qual das condutas abaixo é mais apropriada?",
    options: ['Postergar cuidados paliativos enquanto houver lesão com captação em anel, por manter potencial de reversibilidade.', 'Iniciar sedação paliativa mediante decisão judicial por tratar-se de paciente inconsciente.', 'Priorizar o conforto e dignidade do paciente, evitando intervenções fúteis, mesmo sem consenso familiar imediato.', 'Manter todas as intervenções invasivas até que a família autorize formalmente a limitação terapêutica.'],
    correctAnswer: 2,
    explanation: "Em situações irreversíveis e refratárias, a equipe deve evitar obstinação terapêutica e priorizar conforto e dignidade, mesmo diante de resistência inicial da família. O princípio é o da proporcionalidade terapêutica e prevenção de intervenções fúteis."
  },
  {
    id: "cl10",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 60 anos, portador de hipertensão e diabetes mellitus tipo 2, apresenta dispneia aos esforços leves, ortopneia e edema de membros inferiores. Ecocardiograma revela fração de ejeção de 28%. Encontra-se em uso de losartana e furosemida. Qual das condutas abaixo tem benefício comprovado na redução de mortalidade para esse paciente?",
    options: ['Aumento da dose do diurético de alça.', 'Prescrição de sacubitril/valsartana em substituição à losartana.', 'Adição de antagonista de canal de cálcio à terapêutica atual.', 'Adição de digoxina à terapêutica atual.'],
    correctAnswer: 1,
    explanation: "O quadro é de insuficiência cardíaca com fração de ejeção reduzida (ICFEr). O uso de sacubitril/valsartana (ARNI) demonstrou redução de mortalidade e hospitalizações por IC em comparação com IECA. Diuréticos são sintomáticos e digoxina reduz hospitalizações, mas não mortalidade."
  },
  {
    id: "cl11",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 59 anos, com diagnóstico de diabetes mellitus tipo 2 há 12 anos, apresenta proteinúria de 1,2 g/24h e TFG estimada de 52 mL/min/1,73 m². Qual intervenção está associada à redução da progressão da doença renal na situação apresentada?",
    options: ['Prescrição de inibidor do sistema renina-angiotensina.', 'Restringir ingesta de proteína na dieta para 0,3 g/kg/dia.', 'Descontinuação da metformina.', 'Prescrição de furosemida em dose crescente.'],
    correctAnswer: 0,
    explanation: "IECA ou BRA reduzem a pressão intraglomerular e a proteinúria, retardando a progressão da nefropatia diabética. É a intervenção com melhor evidência de nefroproteção em pacientes diabéticos com DRC."
  },
  {
    id: "cl12",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 28 anos, IMC = 29 kg/m², circunferência abdominal = 102 cm, PA = 138/88 mmHg. Exames: Glicemia de jejum: 110 mg/dL; Triglicerídeos: 190 mg/dL; HDL colesterol: 38 mg/dL. Qual intervenção inicial é mais indicada no cuidado a esse paciente?",
    options: ['Prescrição isolada de estatina.', 'Mudança no estilo de vida incluindo dieta e atividade física.', 'Repetir os exames antes de qualquer prescrição.', 'Prescrição isolada de ciprofibrato para controle de triglicérides.'],
    correctAnswer: 1,
    explanation: "O paciente preenche critérios de síndrome metabólica. A primeira linha de manejo é sempre intervenção no estilo de vida (dieta, atividade física, perda ponderal), antes da introdução de terapia medicamentosa isolada."
  },
  {
    id: "cl13",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 43 anos, etilista crônico, é admitido com agitação, sudorese profusa, tremores, taquicardia e PA elevada. Relata interrupção do uso de álcool há dois dias. Escala CIWA-Ar: 19 pontos. Qual é a conduta indicada para o paciente na situação descrita?",
    options: ['Realizar reposição de vitamina B12 parenteral a fim de evitar complicações neurológicas.', 'Iniciar haloperidol endovenoso e solicitar revisão laboratorial com hemograma, eletrólitos, glicemia, função renal e hepática, amilase e CPK.', 'Prescrever diazepam endovenoso e manter monitorização clínica em regime de internação.', 'Iniciar clorpromazina via intramuscular para controle da agitação e tremores.'],
    correctAnswer: 2,
    explanation: "CIWA-Ar > 18 indica síndrome de abstinência grave, com risco de delirium tremens. O tratamento de primeira linha são benzodiazepínicos (diazepam ou lorazepam), com necessidade de internação, monitorização e reposição de tiamina. Antipsicóticos não são a terapia de escolha."
  },
  {
    id: "cl14",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 48 anos, portador de insuficiência cardíaca descompensada, evoluiu com palpitações e PA de 80x50 mmHg. ECG revela Fibrilação Atrial com instabilidade hemodinâmica. Qual a conduta imediata?",
    options: ['Administração de adrenalina.', 'Prescrição de metoprolol.', 'Administração de atropina.', 'Cardioversão.'],
    correctAnswer: 3,
    explanation: "A presença de taquiarritmia (FA) associada à instabilidade hemodinâmica (hipotensão) indica cardioversão elétrica sincronizada imediata como conduta de primeira linha."
  },
  {
    id: "cl15",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 26 anos procura atendimento por lesões cutâneas (manchas não pruriginosas no tronco, membros e palmas das mãos) há 10 dias. Teste Rápido de Sífilis reagente e VDRL não reagente. Qual é a conduta para este paciente (com manifestações de Sífilis secundária)?",
    options: ['Indicar o tratamento com três doses de Penicilina G Benzatina.', 'Indicar o tratamento com duas doses de Penicilina G Benzatina.', 'Indicar o tratamento com uma dose de Penicilina G Benzatina.', 'Solicitar novo VDRL e, se positivo, indicar o tratamento.'],
    correctAnswer: 2,
    explanation: "Lesões não pruriginosas em tronco e palmas, mais teste treponêmico reagente, são típicos de sífilis secundária. Sífilis primária, secundária e latente recente são tratadas com dose única de Penicilina G Benzatina 2,4 milhões UI IM."
  },
  {
    id: "cl16",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 43 anos, IMC = 36 kg/m², com glicemia de jejum alterada (115 mg/dL), triglicérides elevados e HDL baixo, além de ronco alto (risco cardiovascular aumentado). Qual a medicação mais indicada para favorecer a perda de peso nesse paciente?",
    options: ['Orlistate.', 'Inibidor da recaptação de dopamina/noradrenalina (bupropiona).', 'Agonista do receptor de GLP-1 (semaglutida).', 'Metformina.'],
    correctAnswer: 2,
    explanation: "O paciente apresenta obesidade grau II e síndrome metabólica. Agonistas de GLP-1 (como semaglutida) promovem perda de peso significativa e melhoram parâmetros metabólicos, com benefício cardiovascular, sendo opção preferencial neste perfil de alto risco."
  },
  {
    id: "cl17",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 36 anos, com asma intermitente, apresenta dispneia progressiva e sibilância intensa após infecção de vias aéreas superiores recente. A radiografia de tórax é normal. Qual exame auxilia na confirmação da exacerbação asmática desse paciente?",
    options: ['Pico de fluxo expiratório reduzido.', 'Procalcitonina sérica aumentada.', 'Gasometria arterial com hipoxemia leve.', 'Dosagem de IgE total.'],
    correctAnswer: 0,
    explanation: "A medida seriada do pico de fluxo expiratório (PFE) permite avaliar objetivamente o grau de obstrução de vias aéreas, sendo útil na confirmação e monitorização de exacerbações de asma."
  },
  {
    id: "cl18",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 28 anos, relata febre baixa persistente há 10 dias, sudorese noturna e linfadenopatia cervical bilateral após relações sexuais desprotegidas. Suspeita-se de infecção aguda pelo HIV. Qual é o exame mais indicado para o diagnóstico dessa infecção na fase aguda?",
    options: ['Teste rápido sorológico de detecção de anticorpos circulantes.', 'ELISA de 4ª geração (antígeno p24 + anticorpos).', 'Contagem de linfócitos T CD4+.', 'Western blot de detecção de anticorpos circulantes.'],
    correctAnswer: 1,
    explanation: "Na infecção aguda pelo HIV, a produção de anticorpos pode não estar completa. O ELISA de 4ª geração detecta simultaneamente o antígeno p24 e anticorpos anti-HIV, reduzindo o período de janela imunológica, sendo o exame de escolha."
  },
  {
    id: "cl19",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 28 anos, queixa-se de diarreia há 4 meses, dor abdominal, perda de peso (7 kg), e saída de secreção mucopurulenta da região perianal. Investigação revela anemia, deficiência de vitamina B12 e colonoscopia com inflamação segmentar e transmural. Qual o diagnóstico mais provável?",
    options: ['Síndrome do intestino irritável.', 'Intolerância à lactose.', 'Doença de Crohn.', 'Colite ulcerosa.'],
    correctAnswer: 2,
    explanation: "Diarreia crônica, perda de peso, lesão perianal e inflamação segmentar transmural são típicos da Doença de Crohn, uma doença inflamatória intestinal que pode afetar todo o trato digestório, em padrão descontínuo."
  },
  {
    id: "cl20",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 32 anos procura atendimento por dor torácica recorrente há 3 meses. Dor em aperto, retroesternal, precipitada por esforço físico e aliviada com repouso. Pai teve IAM aos 45 anos. ECG e exames laboratoriais normais. Qual é a conduta diante do quadro clínico desse paciente?",
    options: ['Solicitar cineangiocoronariografia.', 'Iniciar estatina de alto impacto imediatamente.', 'Iniciar dupla antiagregação plaquetária.', 'Solicitar teste ergométrico para avaliação funcional.'],
    correctAnswer: 3,
    explanation: "Dor típica de angina estável em paciente de risco baixo/moderado e com exames basais normais deve ser inicialmente avaliada com teste ergométrico para pesquisa de isquemia indutível."
  },
  {
    id: "cl21",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 32 anos de idade apresenta diarreia aquosa, com mais de 10 dejeções por dia, sem sangue ou muco. Ela apresenta dores articulares, predominantemente nos joelhos e tornozelos, e revela emagrecimento. A biópsia da mucosa duodenal revelou aumento de linfócitos intraepiteliais, atrofia de vilosidades e hiperplasia de criptas. Qual é o diagnóstico mais provável?",
    options: ['Enterocolite por Campylobacter.', 'Deficiência de lactase.', 'Doença celíaca.', 'Doença de Whipple.'],
    correctAnswer: 2,
    explanation: "A Doença Celíaca cursa com diarreia crônica, perda de peso e manifestações extraintestinais, como artralgias. O padrão histológico típico é atrofia de vilosidades, hiperplasia de criptas e aumento de linfócitos intraepiteliais."
  },
  {
    id: "cl22",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 27 anos de idade procura atendimento médico com queixa de perda de peso, sentimento de tristeza constante e falta de “prazer na vida”, além de pensamentos suicidas. Foi diagnosticado transtorno depressivo maior e prescrito o antidepressivo fluoxetina. Por que existe uma demora no início do efeito terapêutico da fluoxetina?",
    options: ['Dessensibilização dos auto-receptores à serotonina sináptica elevada.', 'Aumento do armazenamento de serotonina nas vesículas pré-sinápticas.', 'Diminuição da sensibilidade dos receptores pós-sinápticos.', 'Aumento da captação de triptofano para síntese de serotonina.'],
    correctAnswer: 0,
    explanation: "A fluoxetina inibe a recaptação de serotonina. Inicialmente, há ativação de auto-receptores pré-sinápticos que reduzem a liberação. Com o uso contínuo, esses receptores se dessensibilizam, permitindo maior liberação e efeito antidepressivo após algumas semanas."
  },
  {
    id: "cl23",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 52 anos de idade é atendido no Pronto Socorro com oligúria nos últimos três dias, inchaço nas pernas e cansaço extremo. Tem histórico de hipertensão mal controlada e usou AINEs recentemente. Exames: Creatinina 4,5; Ureia 90; Potássio 5,8. Urina com cilindros granulosos. Qual o diagnóstico e mecanismo?",
    options: ['Glomerulonefrite aguda inflamatória.', 'Síndrome nefrótica por lesão glomerular.', 'Nefropatia por AINEs (vasoconstrição renal por inibição de prostaglandinas).', 'Nefropatia diabética crônica.'],
    correctAnswer: 2,
    explanation: "AINEs inibem a síntese de prostaglandinas vasodilatadoras, levando à vasoconstrição arteriolar aferente e redução do fluxo sanguíneo renal, causando lesão renal aguda."
  },
  {
    id: "cl24",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 32 anos, pintor, com uma ferida que aumenta de tamanho surgida após pescaria em mata no vale de um rio. Histopatologia: macrófagos com estruturas esféricas. Intradermorreação de Montenegro positiva. Diagnóstico e achado?",
    options: ['Leishmaniose tegumentar, forma cutânea difusa; formas promastigotas.', 'Leishmaniose tegumentar, forma cutaneomucosa; formas paramastigotas.', 'Leishmaniose tegumentar, forma cutânea; formas amastigotas intracelulares.', 'Leishmaniose tegumentar, forma mucosa; formas amastigotas intracelulares.'],
    correctAnswer: 2,
    explanation: "A Leishmaniose Tegumentar Americana (forma cutânea) cursa com lesão única, IDRM positiva e presença de amastigotas intracelulares na biópsia."
  },
  {
    id: "cl25",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 25 anos com hemoglobinopatia SS. Esposa tem genótipo AA. Qual é o risco do bebê apresentar a doença (Anemia Falciforme)?",
    options: ['Traço falcêmico, sem risco para o bebê.', 'Traço falcêmico, com 25% de risco.', 'Anemia falciforme, com 50% de risco.', 'Anemia falciforme, sem risco para o bebê.'],
    correctAnswer: 3,
    explanation: "Pai SS e mãe AA obrigatoriamente terão filhos AS (traço falcêmico). Não há risco do bebê ter a doença (SS), apenas de ser portador."
  },
  {
    id: "cl26",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Enfermeiro de PS sofre ferimento acidental com agulha de paciente HIV+. Doze dias depois apresenta febre, mialgia, adenopatia e exantema. Qual o teste mais indicado para investigar infecção aguda?",
    options: ['Western blot.', 'Carga viral (HIV RNA PCR).', 'Antigenemia p24.', 'Imunoensaio de 3ª geração.'],
    correctAnswer: 1,
    explanation: "No Estágio I de Fiebig (10-17 dias), o primeiro teste a se positivar é o RNA viral por PCR. Sorologias levam mais tempo."
  },
  {
    id: "cl27",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 48 anos com homozigose para mutação C282Y (Hemocromatose). Qual parâmetro laboratorial frequentemente encontra-se reduzido?",
    options: ['Ferritina.', 'Índice de saturação da transferrina.', 'Capacidade total de ligação do ferro (TIBC).', 'Ferro sérico.'],
    correctAnswer: 2,
    explanation: "Na hemocromatose há excesso de ferro. A síntese de transferrina diminui como compensação, reduzindo o TIBC."
  },
  {
    id: "cl28",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 38 anos com artrite simétrica em mãos e rigidez matinal há 6 meses. VHS/PCR elevados e anti-CCP positivo. Qual achado é mais significativo para o diagnóstico definitivo?",
    options: ['Sinais cardinais da inflamação.', 'VHS elevado.', 'Proteína C reativa elevada.', 'Detecção de anticorpos contra antígenos autólogos específicos (anti-CCP).'],
    correctAnswer: 3,
    explanation: "O anti-CCP tem altíssima especificidade para Artrite Reumatoide, sendo fundamental para o diagnóstico definitivo."
  },
  {
    id: "cl29",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 25 anos com dor abdominal migratória para fossa ilíaca direita há 24 horas. Além de leucocitose com desvio à esquerda, quais achados são prováveis no hemograma?",
    options: ['Granulações tóxicas, corpúsculos de Döhle e vacúolos.', 'Vacúolos, corpos de Heinz e Howell-Jolly.', 'Corpos de Heinz, Howell-Jolly e hastes de Auer.', 'Corpúsculos de Döhle, vacúolos e corpos de Heinz.'],
    correctAnswer: 0,
    explanation: "Em infecções agudas bacterianas como apendicite, os neutrófilos apresentam alterações reativas: granulações tóxicas, corpúsculos de Döhle e vacúolos."
  },
  {
    id: "cl30",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 63 anos com DPOC e dispneia. Qual classe medicamentosa e mecanismo são indicados?",
    options: ['Agonista nicotínico vasodilatador.', 'Antagonista muscarínico broncodilatador.', 'Antagonista beta-adrenérgico.', 'Agonista colinérgico reductor de muco.'],
    correctAnswer: 1,
    explanation: "Anticolinérgicos (LAMA) bloqueiam receptores muscarínicos na musculatura brônquica, promovendo broncodilatação na DPOC."
  },
  {
    id: "cl31",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Adolescente com asma e eosinofilia. Qual o mecanismo imunológico da doença?",
    options: ['Hipersensibilidade tipo 3 com Th1 e IgG.', 'Hipersensibilidade tipo 2 mediada por Ag-Ac.', 'Hipersensibilidade mediada por Th1 e citocinas inflamatórias.', 'Resposta Th2 indutora de IgE e recrutamento de eosinófilos.'],
    correctAnswer: 3,
    explanation: "Asma alérgica é hipersensibilidade tipo I mediada por IgE, com padrão Th2 e eosinofilia."
  },
  {
    id: "cl32",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher com linfadenopatia generalizada, febre noturna, perda de peso e linfocitose. Diagnóstico provável?",
    options: ['Anemia aplástica autoimune.', 'Leucemia linfocítica crônica (linfócitos B maduros incompetentes).', 'Mieloma múltiplo (plasmócitos clonais).', 'Linfoma de Hodgkin (células de Reed-Sternberg).'],
    correctAnswer: 1,
    explanation: "A LLC é caracterizada pelo acúmulo de linfócitos B maduros ineficazes, causando linfocitose e adenopatias."
  },
  {
    id: "cl33",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher com irritabilidade, proptose, taquicardia e TSH baixo. Mecanismos cardiovasculares?",
    options: ['Diminuição da pressão de enchimento e da resistência periférica.', 'Aumento da pressão de enchimento, taquicardia e aumento da pré-carga.', 'Aumento da resistência periférica e diminuição do débito.', 'Taquiarritmia com aumento do relaxamento diastólico.'],
    correctAnswer: 1,
    explanation: "O hipertireoidismo causa um estado hiperdinâmico com taquicardia, aumento da pré-carga e do débito cardíaco."
  },
  {
    id: "cl34",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 69 anos com afasia e hemiplegia direita. TC após 24h mostra hipodensidade frontoparietal esquerda (preservando porção medial). Artéria culpada?",
    options: ['Cerebral posterior esquerda.', 'Basilar.', 'Cerebral anterior esquerda.', 'Cerebral média esquerda.'],
    correctAnswer: 3,
    explanation: "A artéria cerebral média irriga a face lateral dos hemisférios; lesão à esquerda causa afasia e déficits motores à direita."
  },
  {
    id: "cl35",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher com dor precordial, hipotensão e infra de ST em D2, D3, aVF. Conduta inicial na SCA sem supra?",
    options: ['Trombolítico venoso.', 'Nitrato venoso.', 'Betabloqueador oral.', 'Antiagregação plaquetária oral.'],
    correctAnswer: 3,
    explanation: "Antiagregação (AAS + P2Y12) é mandatória. Trombolíticos não se usam em SCA sem supra; nitratos/betabloqueadores exigem estabilidade pressórica."
  },
  {
    id: "cl36",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem com astenia, náuseas e ALT/AST > 1000. Relação sexual desprotegida há 2 meses. Marcadores de Hepatite B aguda?",
    options: ['HBsAg, HBeAg e Anti-HBc IgM.', 'HBsAg, HBeAg e Anti-HBc IgG.', 'HBsAg, Anti-HBe e Anti-HBc IgM.', 'HBsAg, Anti-HBc IgG e Anti-HBs.'],
    correctAnswer: 0,
    explanation: "Na fase aguda temos HBsAg (presença do vírus), HBeAg (replicação) e Anti-HBc IgM (infecção recente)."
  },
  {
    id: "cl37",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher no 4º dia de febre, dor retrorbitária e leucopenia. Exame mais adequado para diagnóstico de Dengue?",
    options: ['Pesquisa do antígeno NS-1.', 'Pesquisa de IgG.', 'Pesquisa de IgM.', 'Cultura viral.'],
    correctAnswer: 0,
    explanation: "O antígeno NS1 é detectável no início da doença (1º ao 5º dia), sendo ideal para diagnóstico precoce."
  },
  {
    id: "cl38",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Quadro de rabdomiólise severa e injúria renal. Relacione as associações corretas:",
    options: ['1 – E, F; 2 – B, C; 3 – G, H; 4 – D, H', '1 – E, F; 2 – B, C; 3 – D, H; 4 – A, H', '1 – C, F; 2 – B, E; 3 – D, H; 4 – A, G', '1 – C, E; 2 – B, F; 3 – A, G; 4 – D, H'],
    correctAnswer: 3,
    explanation: "1-C (Síndrome Compartimental), 2-B (Lise Celular), 3-A (Deposição de Mioglobina) e 4-D (Fluxo de Na/Ca) formam a cadeia fisiopatológica descrita."
  },
  {
    id: "cl39",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem com dor aguda no hálux, tofos em orelhas e libação alcoólica. Conduta na crise de Gota?",
    options: ['Anti-inflamatório não hormonal e colchicina.', 'Corticoide e diurético de alça.', 'Corticoide e tiazídico.', 'AINE e uricosúricos.'],
    correctAnswer: 0,
    explanation: "Na crise aguda de gota, o objetivo é reduzir a dor e inflamação com AINEs e/ou Colchicina."
  },
  {
    id: "cl40",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher com poliartralgia, rash fotossensível e urina espumosa. Alterações laboratoriais no LES?",
    options: ['Leucocitose, VHS aumentado e hipercomplementenemia.', 'Leucopenia, VHS normal e hematúria.', 'Leucocitose, VHS normal e hipocomplementenemia.', 'Leucopenia, VHS aumentado, hipocomplementenemia e proteinúria.'],
    correctAnswer: 3,
    explanation: "No LES temos consumo de complemento (hipocomplementenemia), inflamação (VHS alto), citopenias e proteinúria na nefrite lúpica."
  },
  {
    id: "cl41",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Em paciente com hipercalemia, doença renal crônica, sem diurese residual, que terapia, além da diálise, é capaz de reduzir o potássio corporal?",
    options: ["Glicoinsulinoterapia.", "Furosemida endovenosa.", "Ciclossilicato de zircônio.", "Gluconato de cálcio.", "Inalação com B2-agonista."],
    correctAnswer: 2,
    explanation: "Em pacientes com doença renal crônica estágio V sem diurese, a eliminação de potássio só ocorre por via extracorpórea (diálise) ou intestinal (resinas de troca como ciclossilicato de zircônio)."
  },
  {
    id: "cl42",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Paciente de 5 anos com quadro de anemia (Hb 9,1; VCM 56; RDW 12%). Não respondeu à reposição de ferro oral por 3 meses. Qual é a melhor conduta?",
    options: ["Dobrar dose da reposição de ferro oral.", "Iniciar reposição de ferro endovenosa.", "Eletroforese de hemoglobinas.", "Colonoscopia para diagnóstico de doença celíaca.", "Transfusão de hemácias."],
    correctAnswer: 2,
    explanation: "Microcitose acentuada com RDW normal é um marcador clássico de talassemia. Na anemia ferropriva, o RDW estaria elevado (anisocitose)."
  },
  {
    id: "cl43",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher, 59 anos, IC chagásica (FE 36%). Usa enalapril, bisoprolol, espironolactona e furosemida. ECG mostra FA. Qual medicação deve ser associada para redução da mortalidade?",
    options: ["sacubitril-valsartana.", "ivabradina.", "empagliflozina.", "digoxina.", "hidralazina e mononitrato de isossorbida."],
    correctAnswer: 2,
    explanation: "Inibidores da SGLT2 (como a empagliflozina) reduzem mortalidade em ICFER independente de diabetes. Ivabradina não se usa em FA e sacubitril não pode ser somado ao enalapril."
  },
  {
    id: "cl44",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher, 38 anos, febre alta e pústulas estéreis sobre base eritematosa 48h após amoxicilina. Leucocitose com neutrofilia. Diagnóstico?",
    options: ["Necrólise epidérmica tóxica.", "Síndrome de Stevens-Johnson.", "Pustulose exantemática generalizada aguda.", "Psoríase pustulosa.", "Eritrodermia esfoliativa."],
    correctAnswer: 2,
    explanation: "A Pustulose Exantemática Aguda Generalizada (PEGA) é uma farmacodermia caracterizada por pústulas estéreis e febre, frequentemente após antibióticos."
  },
  {
    id: "cl45",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher, 45 anos, dor abdominal superior irradiada para dorso, vômitos. Amilase 290 (VR 120), Lipase 460 (VR 380). Conduta?",
    options: ["Iniciar dieta zero, hidratação e analgesia.", "Solicitar ultrassonografia de abdome.", "Solicitar tomografia computadorizada de abdome.", "Realizar CPRE de urgência.", "Solicitar sorologias para hepatites."],
    correctAnswer: 2,
    explanation: "Diagnóstico de pancreatite exige enzimas > 3x VR. Como os valores são menores, a TC é necessária para confirmar e avaliar a gravidade."
  },
  {
    id: "cl46",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem, 32 anos, situação de rua, tosse há 1 semana, febre baixa e perda de apetite. Conduta?",
    options: ["Radiografia e tratar TB latente se alterada.", "Investigar TB com teste rápido molecular e cultura.", "Radiografia e tratar TB pulmonar se alterada.", "Aguardar 3 semanas de tosse.", "Encaminhar para ambiente hospitalar."],
    correctAnswer: 1,
    explanation: "Em populações vulneráveis (como pessoas de rua), investiga-se TB diante de QUALQUER duração de tosse usando TRM-TB e cultura."
  },
  {
    id: "cl47",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Na escala CAM-ICU para diagnóstico de delirium, qual critério é considerado obrigatório?",
    options: ["desatenção.", "alteração do nível de consciência.", "alteração de fala.", "disartria.", "agnosia."],
    correctAnswer: 0,
    explanation: "O CAM-ICU exige obrigatoriamente a presença de confusão mental aguda/flutuante associada à desatenção."
  },
  {
    id: "cl48",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem, 55 anos, dispneia súbita e dor torácica após vôo de 8h. FC 110, FR 28, SatO2 88% e edema em MID. Próximo passo?",
    options: ["angiotomografia de tórax.", "dosagem de dímero-D.", "ecocardiograma à beira leito.", "angiografia pulmonar.", "cintilografia V/Q."],
    correctAnswer: 0,
    explanation: "Escore de Wells elevado indica alta probabilidade clínica de TEP. O exame de escolha é a angiotomografia; dímero-D não exclui a necessidade de imagem aqui."
  },
  {
    id: "cl49",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Qual é o antídoto indicado na intoxicação exógena grave provocada por zolpidem?",
    options: ["N-acetilcisteína.", "Naloxona.", "Flumazenil.", "Atropina.", "Glucagon."],
    correctAnswer: 2,
    explanation: "Flumazenil é o antídoto para benzodiazepínicos e drogas Z (zolpidem), agindo no receptor GABA."
  },
  {
    id: "cl50",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Assinale o exame compatível com o diagnóstico de diabetes mellitus.",
    options: ["Glicemia capilar de 127 mg/dL.", "Hemoglobina glicada de 5,8%.", "TTGO 2h de 157 mg/dL.", "Glicemia randômica de 254 mg/dL.", "TTGO 1h de 210 mg/dL."],
    correctAnswer: 4,
    explanation: "Valores de TTGO de 1 hora ≥ 209 mg/dL são diagnósticos de diabetes. Glicemia randômica exige sintomas clássicos associados."
  },
  {
    id: "cl51",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Homem, 52 anos. Exames: Ht 25%, VCM 120, ferritina 150, reticulócitos 4%. Hematoscopia: neutrófilos hipersegmentados. Hipótese?",
    options: ["anemia perniciosa", "hemólise intravascular", "anemia ferropriva", "hemólise extravascular"],
    correctAnswer: 0,
    explanation: "Anemia macrocítica com neutrófilos hipersegmentados é o achado clássico de deficiência de B12 (ex: anemia perniciosa)."
  },
  {
    id: "cl52",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "No choque sob ventilação mecânica controlada, qual medida dinâmica sugere melhor resposta à fluidoterapia?",
    options: ["pressão de pulso < 10%", "volume sistólico > 12%", "pressão sistólica = 5mmHg", "pressão de pulso < 12,5%"],
    correctAnswer: 1,
    explanation: "A variação do volume sistólico > 12% ou da pressão de pulso > 13% prediz boa resposta à expansão volêmica."
  },
  {
    id: "cl53",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Principal fator de risco para alergia respiratória ao contraste intravenoso iodado:",
    options: ["história familiar de alergia", "insuficiência renal", "hipotireoidismo", "história de alergia prévia ao meio de contraste"],
    correctAnswer: 3,
    explanation: "O antecedente de reação alérgica ao próprio contraste é o preditor de risco mais importante."
  },
  {
    id: "cl54",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Condição mais frequentemente associada a piúria e sedimento urinário ativo (hematúria/cilindros hemáticos):",
    options: ["síndrome nefrótica pura", "nefropatia diabética", "glomerulonefrite pós-estreptocócica aguda", "glomerulopatia membranosa"],
    correctAnswer: 2,
    explanation: "A GNPE cursa tipicamente com síndrome nefrítica: hematúria, piúria estéril inflamatória e cilindros hemáticos."
  },
  {
    id: "cl55",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Na intoxicação por cocaína com dor precordial: I) Succinilcolina é preferível. II) Tratar hipertensão com nitroglicerina. III) Evitar betabloqueadores isolados. Estão corretas:",
    options: ["I e III", "II e III", "I", "II"],
    correctAnswer: 1,
    explanation: "Evitam-se betabloqueadores pelo risco de estimulação alfa exagerada. Nitratos controlam a dor e a pressão."
  },
  {
    id: "cl56",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Homem, 52 anos, dor precordial aguda, sudorese, alto risco. ECG e troponina iniciais normais. Conduta?",
    options: ["Angina estável; teste ergométrico.", "Infarto com supra; angioplastia.", "Manter no PS para seriar ECG e troponina.", "Angio-TC ambulatorial.", "Trombólise imediata."],
    correctAnswer: 2,
    explanation: "Em paciente de alto risco com dor sugestiva, a primeira troponina pode ser negativa. Deve-se seriar os exames no PS."
  },
  {
    id: "cl57",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Esquema adequado para controle sintomático de crise de enxaqueca intensa com náuseas em ambiente hospitalar:",
    options: ["dimenidriato + piridoxina", "metoclopramida + dexametasona", "ondansetrona + tramadol", "metoclopramida + tramadol", "ondansetrona + cetoprofeno"],
    correctAnswer: 1,
    explanation: "Metoclopramida tem efeito analgésico adjuvante e antiemético. Corticoides reduzem a recorrência da crise."
  },
  {
    id: "cl58",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Cirrótico com ascite e lesão renal aguda (Cr 0,8 para 2,9) após diuréticos. Qual conduta auxilia no diagnóstico diferencial?",
    options: ["Melhora com albumina confirma SHR.", "Manter diuréticos.", "Aumentar aporte hídrico.", "Hemodiálise imediata.", "Exclusão de componente pós-renal (obstrução)."],
    correctAnswer: 4,
    explanation: "O diagnóstico de SHR exige a exclusão de causas obstrutivas (pós-renais), prerronais e parenquimatosas."
  },
  {
    id: "cl59",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Varizes de grosso calibre em cirrótico estável com melena. Além da ligadura elástica, o manejo deve incluir:",
    options: ["Antibiótico profilático e alta.", "Betabloqueador e alta.", "Betabloqueador e antibiótico se tiver ascite.", "Vasoconstritor por 3-5 dias e antibiótico profilático."],
    correctAnswer: 3,
    explanation: "HDA varicosa exige vasoconstritor sistêmico por 3-5 dias e profilaxia antibiótica para TODOS os pacientes."
  },
  {
    id: "cl60",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Derrame pleural em paciente com IC usando diurético. Por que calcular o gradiente de albumina soro-líquido pleural?",
    options: ["Idade avançada.", "Uso de diurético.", "Diagnóstico de diabetes.", "Suspeita de neoplasia."],
    correctAnswer: 1,
    explanation: "Diuréticos concentram proteínas no líquido pleural, podendo falsear os critérios de Light. O gradiente >1,2 g/dL confirma transudato."
  },
  {
    id: "cl61",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher, 35 anos, artrite reumatoide, tosse e fadiga. TC: faveolamento e bronquiectasias de tração bibasais. Hipótese:",
    options: ["não específica.", "criptogênica em organização.", "linfocítica.", "não usual."],
    correctAnswer: 3,
    explanation: "O padrão de faveolamento (favorecimento de cistos subpleurais) define a pneumonia intersticial não usual (UIP)."
  },
  {
    id: "cl62",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher, 25 anos, AVE isquêmico e ausência de pulsos em radial esquerda e braquial direita. Hipótese?",
    options: ["vasculite primária de SNC.", "arterite de células gigantes.", "poliarterite nodosa.", "arterite de Takayasu."],
    correctAnswer: 3,
    explanation: "Takayasu é a vasculite de grandes vasos que acomete mulheres jovens, levando à estenose/ausência de pulsos."
  },
  {
    id: "cl63",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Diarreia, ondas de calor, rubor facial e sibilância agravados por álcool e exercício. Qual exame solicitar?",
    options: ["triptase e histamina", "ácido 5-hidroxi indol acético (5-HIAA)", "metanefrinas", "T4 livre e TSH"],
    correctAnswer: 1,
    explanation: "A Síndrome Carcinoide cursa com esses sintomas vasomotores e intestinais. Diagnóstico via 5-HIAA urinário."
  },
  {
    id: "cl64",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Paracentese de 8L em cirrótico volumoso. Após 2 dias, oligúria e aumento de Cr. Conduta inicial?",
    options: ["terapia dialítica.", "expansão volêmica com albumina.", "estímulo com diurético.", "expectante."],
    correctAnswer: 1,
    explanation: "Em paracenteses > 5L, a reposição de albumina (8g/L retirado) é mandatória para prevenir disfunção circulatória e renal."
  },
  {
    id: "cl65",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Ptose palpebral bilateral com melhora após teste do pack de gelo. O diagnóstico topográfico é no(a):",
    options: ["nervo craniano.", "placa motora.", "músculo.", "gânglio dorsal."],
    correctAnswer: 1,
    explanation: "A Miastenia Gravis afeta a placa motora. O frio melhora a transmissão da acetilcolina temporariamente."
  },
  {
    id: "cl66",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Qual procedimento endoscópico possui indicação clara de antibioticoprofilaxia?",
    options: ["confecção de gastrostomia endoscópica.", "punção de lesão sólida via ecoendoscopia.", "EDA diagnóstica em cirrótico.", "colonoscopia em valvulopata."],
    correctAnswer: 0,
    explanation: "A gastrostomia (PEG) exige profilaxia devido ao risco de infecção no trajeto cirúrgico da cânula."
  },
  {
    id: "cl67",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Perfil laboratorial clássico de aminotransferases na hepatite alcoólica:",
    options: ["> 1000 U/L, predomínio AST.", "> 1000 U/L, predomínio ALT.", "< 400 U/L, predomínio AST.", "< 400 U/L, predomínio ALT."],
    correctAnswer: 2,
    explanation: "Na hepatite alcoólica as transaminases raramente passam de 400-500, com relação AST/ALT > 2."
  },
  {
    id: "cl68",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Insuficiência adrenal com ACTH baixo, renina e aldosterona normais. Qual o próximo passo?",
    options: ["dosar anticorpos adrenais.", "realizar ressonância magnética da hipófise.", "realizar TC das adrenais.", "dosar 17-hidroxiprogesterona."],
    correctAnswer: 1,
    explanation: "ACTH baixo define insuficiência secundária (central), exigindo avaliação da hipófise."
  },
  {
    id: "cl69",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Urgência dialítica em urêmico com PAS inaudível, bulhas abafadas e turgência jugular. Causa e prevenção:",
    options: ["tamponamento cardíaco / não usar heparina na diálise.", "IAM / retirada lenta de volume.", "TEP / heparina subcutânea.", "embolia aérea / cata-bolhas."],
    correctAnswer: 0,
    explanation: "Derrame pericárdico urêmico pode tornar-se hemopericárdio pelo uso de heparina no circuito da diálise."
  },
  {
    id: "cl70",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Déficit neurológico focal e ritmo irregular. Sopro diastólico em ruflar na ponta. Hipótese:",
    options: ["comunicação interatrial.", "forame oval patente.", "estenose mitral reumática.", "estenose aórtica."],
    correctAnswer: 2,
    explanation: "Estenose mitral gera aumento de átrio esquerdo, FA e embolia cerebral. O sopro em ruflar é típico."
  },
  {
    id: "cl71",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Doença de Graves em tapazol. Evolui com odinofagia, febre e leucócitos 1200. Conduta?",
    options: ["manutenção da dose.", "suspensão do tapazol.", "aumento da dose.", "redução da dose."],
    correctAnswer: 1,
    explanation: "Agranulocitose é um efeito colateral raro e grave das tionamidas, exigindo suspensão imediata e definitiva."
  },
  {
    id: "cl72",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Jovem com tremor, icterícia e anel acastanhado na periferia da córnea. Hipótese?",
    options: ["Huntington.", "Creutzfeldt-Jakob.", "Whipple.", "Wilson."],
    correctAnswer: 3,
    explanation: "O anel de Kayser-Fleischer por depósito de cobre é o sinal oftalmológico da Doença de Wilson."
  },
  {
    id: "cl73",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Cefaleia súbita intensa e consciência rebaixada. TC mostra sangue em ventrículos e cisternas da base. Classificação Fischer?",
    options: ["Fischer IV.", "Fischer III.", "AVEI.", "Enxaqueca.", "Encefalite."],
    correctAnswer: 0,
    explanation: "HSA com hemorragia intraventricular ou parenquimatosa associada é grau IV de Fischer."
  },
  {
    id: "cl74",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "IC descompensada (Perfil B) por Influenza. EF: estase jugular e estertores. Conduta imediata?",
    options: ["Cardioversão elétrica.", "Profilaxia TEP.", "Aguardar eco.", "VNI, diurético e oseltamivir.", "Betabloqueador oral."],
    correctAnswer: 3,
    explanation: "Tratamento de edema agudo de pulmão (Perfil B) foca em vasodilatação, VNI e tratamento da causa (Influenza)."
  },
  {
    id: "cl75",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Hb 6,5; VCM baixo. Reticulócitos absoluto 65.000. Sobre a anemia, é correto:",
    options: ["Hiperproliferativa.", "Hemolítica.", "Hipoproliferativa e ferropriva.", "Megaloblástica.", "Normoproliferativa."],
    correctAnswer: 2,
    explanation: "Reticulócitos absoluto < 100.000 indicam falha medular na produção compensatória (hipoproliferação)."
  },
  {
    id: "cl76",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Lúpica com Cr 2,1 e rash malar. Para diferenciar infecção de atividade da doença renal, deve-se pedir:",
    options: ["C3, C4, anti-DNA e proteinúria.", "anti-La e biópsia de pele.", "P-ANCA e biópsia medular.", "anti-histona e BAAR.", "apenas hidratação."],
    correctAnswer: 0,
    explanation: "Consumo de complemento e elevação de anticorpos específicos (anti-DNA) marcam atividade lúpica sistêmica."
  },
  {
    id: "cl77",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Emergência hipertensiva com turvação visual. Ressonância com sinal hiperintenso em T2/FLAIR occipital. Diagnóstico?",
    options: ["AVCI.", "AVCH.", "HSA.", "Hemorragia subdural.", "Síndrome PRES."],
    correctAnswer: 4,
    explanation: "A Síndrome da Encefalopatia Posterior Reversível (PRES) é clássica de emergências hipertensivas graves."
  },
  {
    id: "cl78",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher, 27 anos, IRC dialítica com TVP. Conduta adequada para anticoagulação?",
    options: ["Apixabana.", "Rivaroxabana.", "Heparina e apixabana.", "Heparina e varfarina (Marevan).", "Aspirina."],
    correctAnswer: 3,
    explanation: "Pacientes dialíticos não devem usar DOACs (como apixabana); a droga padrão é a varfarina."
  },
  {
    id: "cl79",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Linfoma em quimioterapia há 8 dias com febre alta e taquicardia. Conduta prioritária?",
    options: ["Monitorar e dar alta.", "Aguardar hemograma.", "Antibiótico antipseudomonas imediato.", "Azitromicina oral."],
    correctAnswer: 2,
    explanation: "Neutropenia febril é emergência médica. O antibiótico deve ser iniciado na primeira hora do atendimento."
  },
  {
    id: "cl80",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher, 63 anos, TSH 10,7 e T4L normal, anti-TPO negativo, assintomática. Conduta?",
    options: ["Levotiroxina imediata.", "Ultrassonografia tireoide.", "Monitorizar TSH a cada 6-12 meses.", "Repetir exames e tratar se TSH > 5."],
    correctAnswer: 2,
    explanation: "No hipotireoidismo subclínico de idosos (>65) com TSH < 10, a conduta preferencial é vigilância."
  },
  {
    id: "cl81",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "A fisiopatogenia da dengue grave está diretamente relacionada com:",
    options: ["hemorragia", "aumento da permeabilidade capilar", "pancitopenia autoimune", "insuficiência hepática"],
    correctAnswer: 1,
    explanation: "O extravasamento plasmático por aumento da permeabilidade capilar é o marco da gravidade na dengue."
  },
  {
    id: "cl82",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Na insuficiência cardíaca, qual resposta neuro-humoral compensatória é observada?",
    options: ["aumento no fluxo sanguíneo renal", "redução na secreção de renina", "aumento da liberação de vasopressina", "redução na atividade simpática"],
    correctAnswer: 2,
    explanation: "A queda do débito estimula a liberação de vasopressina (ADH) para tentar manter a volemia e pressão."
  },
  {
    id: "cl83",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Quais subtipos histopatológicos do câncer de pulmão possuem maior associação com o tabagismo?",
    options: ["neuroendócrino e adenocarcinoma", "escamoso e de outro sítio", "adenocarcinoma e escamoso", "pequenas células e escamoso"],
    correctAnswer: 3,
    explanation: "O carcinoma de pequenas células e o epidermoide (escamoso) são os tipos mais ligados ao cigarro."
  },
  {
    id: "cl84",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Tosse produtiva crônica, múltiplas infecções e aspecto de 'trilho de trem' no RX. TC provável:",
    options: ["árvore em brotamento", "calcificação em casca de ovo", "placas pleurais", "imagem do anel de sinete"],
    correctAnswer: 3,
    explanation: "O anel de sinete (brônquio > artéria) é o sinal tomográfico patognomônico das bronquiectasias."
  },
  {
    id: "cl85",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "HAP com POAP > 15mmHg. Qual a classificação (tipo) da hipertensão pulmonar?",
    options: ["II", "IV", "III", "I"],
    correctAnswer: 0,
    explanation: "Pressão de oclusão (POAP) > 15 define origem pós-capilar (Grupo II - doença cardíaca esquerda)."
  },
  {
    id: "cl86",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Qual é CONTRAINDICAÇÃO ABSOLUTA à fibrinólise no infarto com supra de ST?",
    options: ["AVE hemorrágico prévio", "idade avançada", "úlcera péptica ativa", "menstruação"],
    correctAnswer: 0,
    explanation: "Histórico de hemorragia intracraniana prévia proíbe o uso de trombolíticos em qualquer situação."
  },
  {
    id: "cl87",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Sobre a HIT (trombocitopenia induzida por heparina), ela é mais frequente com:",
    options: ["homens do que mulheres.", "trombose arterial do que venosa.", "heparina não fracionada (HNF) do que HBPM.", "casos clínicos do que cirúrgicos."],
    correctAnswer: 2,
    explanation: "A heparina não fracionada possui moléculas maiores que aumentam o risco de formação de anticorpos anti-PF4."
  },
  {
    id: "cl88",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Sobre o tratamento da hipercalemia em pacientes com injúria renal, assinale a correta:",
    options: ["Indicado bicarbonato se pH 7,28.", "Tratar potássio corrige o pH.", "Risco de hipoglicemia pós-insulina é maior.", "Furosemida altera gasometria.", "Gluconato só se tiver alteração no ECG."],
    correctAnswer: 2,
    explanation: "A redução do clearance renal de insulina aumenta o tempo de ação da droga e o risco de hipoglicemia."
  },
  {
    id: "cl89",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Cirrótico com ascite. Punção: 375 PMN, GASA elevado. Se a cultura for negativa, o diagnóstico é:",
    options: ["PBE confirmada.", "Bacterascite (não tratar).", "Ascite neutrofílica (tratar como PBE).", "Exsudato por peritonite secundária.", "Transudato."],
    correctAnswer: 2,
    explanation: "A ascite neutrofílica (>250 PMN com cultura negativa) tem o mesmo manejo e gravidade que a PBE."
  },
  {
    id: "cl90",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Edema agudo de pulmão com FE 56% e átrio esquerdo aumentado. Sobre o diagnóstico de IC:",
    options: ["Achados de eco corroboram hipótese.", "Sem critérios de IC.", "Eco não auxilia.", "Achados afastam IC.", "Sugerem cor pulmonale."],
    correctAnswer: 0,
    explanation: "O aumento do átrio e disfunção diastólica confirmam a IC com fração de ejeção preservada (ICFEP)."
  },
  {
    id: "cl91",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Lúpica com perdas fetais e AVC prévios. Para investigar condição pró-trombótica, deve-se pedir:",
    options: ["anti-ro, centromero, anti-sm.", "anticardiolipina, antibeta 2 e anticoagulante lúpico.", "anticoagulante lúpico, microglobulina, anti-la.", "anticoagulante, microglobulina, anti-ro.", "anticoagulante, centromero, anti-p."],
    correctAnswer: 1,
    explanation: "Os testes para Síndrome do Anticorpo Antifosfolípide (SAF) são os citados na alternativa B."
  },
  {
    id: "cl92",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Anemia e eletroforese com hipogamaglobulinemia. Relação de cadeias leves kappa/lambda alterada. Diagnóstico?",
    options: ["imunodeficiência comum variável.", "gamopatia monoclonal (ex: Mieloma).", "lúpus eritematoso.", "imunodeficiência de anticorpos."],
    correctAnswer: 1,
    explanation: "O desvio na relação de cadeias leves livres sugere produção clonal por plasmócitos (Mieloma Múltiplo)."
  },
  {
    id: "cl93",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Segundo o CAM (Confusion Assessment Method), quais são os critérios obrigatórios para Delirium?",
    options: ["pensamento desorganizado e desatenção.", "modificação aguda e apatia.", "desatenção e dependência.", "modificação aguda do estado e desatenção."],
    correctAnswer: 3,
    explanation: "Os dois pilares obrigatórios do CAM são o início agudo/flutuante e a desatenção."
  },
  {
    id: "cl94",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Paciente com Cr subindo de 1,0 para 3,0 e normalizando em 90 dias. Qual o diagnóstico KDIGO?",
    options: ["IRA hemodinâmica.", "IRA intrínseca.", "Doença Renal Aguda (DRA).", "Doença Renal Crônica (DRC)."],
    correctAnswer: 2,
    explanation: "Doença Renal Aguda (DRA) é a fase entre a lesão aguda (<7 dias) e a crônica (>3 meses)."
  },
  {
    id: "cl95",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "PA 270x136, papiledema e crepitações pulmonares. Diagnóstico e conduta?",
    options: ["Hipertensão acelerada; manejo oral.", "Hipertensão maligna; vasodilatador IV.", "Hipertensão resistente; manejo oral.", "Hipertensão resistente; vasodilatador IV."],
    correctAnswer: 1,
    explanation: "Emergência hipertensiva (lesão aguda de órgão-alvo) exige internação e medicação parenteral."
  },
  {
    id: "cl96",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Pneumonia em idosa: desorientada, Ureia 56. CURB-65 indica 2 pontos. Manejo?",
    options: ["Azitromicina ambulatorial.", "Azitromicina ambulatorial.", "Betalactâmico + macrolídeo e internação.", "Betalactâmico + macrolídeo ambulatorial."],
    correctAnswer: 2,
    explanation: "CURB-65 de 2 pontos sugere internação hospitalar. O esquema padrão é betalactâmico + macrolídeo."
  },
  {
    id: "cl97",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Herpes Zoster em paciente transplantado renal. Qual a conduta correta?",
    options: ["Aciclovir endovenoso.", "Aguarda resolução espontânea.", "Aciclovir tópico.", "Aciclovir oral e analgesia."],
    correctAnswer: 0,
    explanation: "Em imunossuprimidos, o risco de zoster disseminado exige tratamento parenteral (IV)."
  },
  {
    id: "cl98",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "PCR com traçado de ondas caóticas e amplitude variável (FV). Após chamar ajuda, sequência ACLS:",
    options: ["compressões e epinefrina.", "desfibrilação, compressões, desfibrilação, epinefrina.", "intubação e compressões.", "desfibrilação e amiodarona."],
    correctAnswer: 1,
    explanation: "Fibrilação Ventricular exige choque imediato, RCP por 2 min e nova checagem de ritmo."
  },
  {
    id: "cl99",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Insuficiência Cardíaca com FE 55% (preservada). Para aumentar sobrevida, deve-se:",
    options: ["IECA.", "Espironolactona.", "Inibidor da SGLT2 (Gliflozina).", "Tratar apenas comorbidades."],
    correctAnswer: 2,
    explanation: "As gliflozinas são as únicas drogas que reduzem mortalidade e hospitalização na ICFEP."
  },
  {
    id: "cl100",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Idosa com Alzheimer e quedas frequentes. Qual droga deve ser prioritariamente retirada (Critérios de Beers)?",
    options: ["antipsicótico", "vitamina D", "diurético", "bisfosfonato"],
    correctAnswer: 0,
    explanation: "Antipsicóticos aumentam o risco de sedação, parkinsonismo e quedas em idosos, sendo contraindicados de rotina."
  }
];
