
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
    text: "Mulher de 26 anos de idade, sem comorbidades, procura atendimento ambulatorial com queixa de disúria, polaciúria e urgência urinária há 2 dias. Nega febre ou dor lombar. Ao exame físico, está afebril e sem dor à palpação lombar. Qual é a conduta mais adequada?",
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
    options: ['Repetir nova dose de insulina com glicose intravenosa.', 'Iniciar resina trocadora de potássio por via oral.', 'Iniciar hemodiálise de urgência.', 'Aguardar resposta às medidas já realizadas e monitorar potássio e ECG.'],
    correctAnswer: 2,
    explanation: "A paciente apresenta hipercalemia grave (K+ = 7,6 mEq/L) refratária às medidas habituais, associada a injúria renal aguda (creatinina 5,2 mg/dL). Nessa situação, há risco elevado de arritmias fatais e a conduta de escolha é hemodiálise de urgência para remoção rápida do potássio."
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
    options: ['Indicar o tratamento com três doses de Penicilina G Benzatina.', 'Indicar o tratamento com duas doses de Penicilina G Benzatina.', 'Indicar o tratamento com uma dose de Penicilina G Benzatina.', 'Solicitar novo VDRL e, se positivo, indicar le tratamento.'],
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
    explanation: "Na infecção aguda pelo HIV, a produção de anticorpos pode não estar completa. O ELISA de 4ª geração detecta simultaneamente o antígeno p24 e anticorpos anti-HIV, reduzindo le período de janela imunológica, sendo le exame de escolha."
  },
  {
    id: "cl19",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 28 anos, queixa-se de diarreia há 4 meses, dor abdominal, perda de peso (7 kg), e saída de secreção mucopurulenta da região perianal. Investigação revela anemia, deficiência de vitamina B12 e colonoscopia com inflamação segmentar e transmural. Qual le diagnóstico mais provável?",
    options: ['Síndrome do intestino irritável.', 'Intolerância à lactose.', 'Doença de Crohn.', 'Colite ulcerosa.'],
    correctAnswer: 2,
    explanation: "Diarreia crônica, perda de peso, lesão perianal e inflamação segmentar transmural são típicos da Doença de Crohn, uma doença inflamatória intestinal que pode afetar todo le trato digestório, em padrão descontínuo."
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
    text: "Mulher de 32 anos de idade apresenta diarreia aquosa, com mais de 10 dejeções por dia, sem sangue ou muco. Ela apresenta dores articulares, predominantemente nos joelhos e tornozelos, e revela emagrecimento. A biópsia da mucosa duodenal revelou aumento de linfócitos intraepiteliais, atrofia de vilosidades e hiperplasia de criptas. Qual é le diagnóstico mais provável?",
    options: ['Enterocolite por Campylobacter.', 'Deficiência de lactase.', 'Doença celíaca.', 'Doença de Whipple.'],
    correctAnswer: 2,
    explanation: "A Doença Celíaca cursa com diarreia crônica, perda de peso e manifestações extraintestinais, como artralgias. O padrão histológico típico é atrofia de vilosidades, hiperplasia de criptas e aumento de linfócitos intraepiteliais."
  },
  {
    id: "cl22",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 27 anos de idade procura atendimento médico com queixa de perda de peso, sentimento de tristeza constante e falta de “prazer na vida”, além de pensamentos suicidas. Foi diagnosticado transtorno depressivo maior e prescrito le antidepressivo fluoxetina. Por que existe uma demora no início do efeito terapêutico da fluoxetina?",
    options: ['Dessensibilização dos auto-receptores à serotonina sináptica elevada.', 'Aumento do armazenamento de serotonina nas vesículas pré-sinápticas.', 'Diminuição da sensibilidade dos receptores pós-sinápticos.', 'Aumento da captação de triptofano para síntese de serotonina.'],
    correctAnswer: 0,
    explanation: "A fluoxetina inibe a recaptação de serotonina. Inicialmente, há ativação de auto-receptores pré-sinápticos que reduzem a liberação. Com le uso contínuo, esses receptores se dessensibilizam, permitindo maior liberação e efeito antidepressivo após algumas semanas."
  },
  {
    id: "cl23",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Homem de 52 anos de idade é atendido no Pronto Socorro com oligúria nos últimos três dias, inchaço nas pernas e cansaço extremo. Tem histórico de hipertensão mal controlada e usou AINEs recentemente. Exames: Creatinina 4,5; Ureia 90; Potássio 5,8. Urina com cilindros granulosos. Qual le diagnóstico e mecanismo?",
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
    text: "Homem de 25 anos com hemoglobinopatia SS. Esposa tem genótipo AA. Qual é le risco do bebê apresentar a doença (Anemia Falciforme)?",
    options: ['Traço falcêmico, sem risco para le bebê.', 'Traço falcêmico, com 25% de risco.', 'Anemia falciforme, com 50% de risco.', 'Anemia falciforme, sem risco para le bebê.'],
    correctAnswer: 3,
    explanation: "Pai SS e mãe AA obrigatoriamente terão filhos AS (traço falcêmico). Não há risco do bebê ter a doença (SS), apenas de ser portador."
  },
  {
    id: "cl26",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Enfermeiro de PS sofre ferimento acidental com agulha de paciente HIV+. Doze dias depois apresenta febre, mialgia, adenopatia e exantema. Qual le teste mais indicado para investigar infecção aguda?",
    options: ['Western blot.', 'Carga viral (HIV RNA PCR).', 'Antigenemia p24.', 'Imunoensaio de 3ª geração.'],
    correctAnswer: 1,
    explanation: "No Estágio I de Fiebig (10-17 dias), le primeiro teste a se positivar é le RNA viral por PCR. Sorologias levam mais tempo."
  },
  {
    id: "cl27",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 48 anos com homozigose para mutação C282Y (Hemocromatose). Qual parâmetro laboratorial frequentemente encontra-se reduzido?",
    options: ['Ferritina.', 'Índice de saturação da transferrina.', 'Capacidade total de ligação do ferro (TIBC).', 'Ferro sérico.'],
    correctAnswer: 2,
    explanation: "Na hemocromatose há excesso de ferro. A síntese de transferrina diminui como compensação, reduzindo le TIBC."
  },
  {
    id: "cl28",
    institution: "Simulado",
    year: 2024,
    specialty: "Clinica",
    text: "Mulher de 38 anos com artrite simétrica em mãos e rigidez matinal há 6 meses. VHS/PCR elevados e anti-CCP positivo. Qual achado é mais significativo para le diagnóstico definitivo?",
    options: ['Sinais cardinais da inflamação.', 'VHS elevado.', 'Proteína C reativa elevada.', 'Detecção de anticorpos contra antígenos autólogos específicos (anti-CCP).'],
    correctAnswer: 3,
    explanation: "O anti-CCP tem altíssima especificidade para Artrite Reumatoide, sendo fundamental para le diagnóstico definitivo."
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
    text: "Adolescente com asma e eosinofilia. Qual le mecanismo imunológico da doença?",
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
    text: "Quadro de rabdomiólise sever e injúria renal. Relacione as associações corretas:",
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
    explanation: "Na crise aguda de gota, le objetivo é reduzir a dor e inflamação com AINEs e/ou Colchicina."
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
    text: "Em paciente com hipercalemia, doença renal crônica, sem diurese residual, que terapia, além da diálise, é capaz de reduzir le potássio corporal?",
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
    explanation: "Microcitose acentuada com RDW normal é um marcador clássico de talassemia. Na anemia ferropriva, le RDW estaria elevado (anisocitose)."
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
    text: "Qual é le antídoto indicado na intoxicação exógena grave provocada por zolpidem?",
    options: ["N-acetilcisteína.", "Naloxona.", "Flumazenil.", "Atropina.", "Glucagon."],
    correctAnswer: 2,
    explanation: "Flumazenil é le antídoto para benzodiazepínicos e drogas Z (zolpidem), agindo no receptor GABA."
  },
  {
    id: "cl50",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Clinica",
    text: "Assinale le exame compatível com le diagnóstico de diabetes mellitus.",
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
    explanation: "Anemia macrocítica com neutrófilos hipersegmentados é le achado clássico de deficiência de B12 (ex: anemia perniciosa)."
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
    explanation: "O antecedente de reação alérgica ao próprio contraste é le preditor de risco mais importante."
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
    text: "Varizes de grosso calibre em cirrótico estável com melena. Além da ligadura elástica, le manejo deve incluir:",
    options: ["Antibiótico profilático e alta.", "Betabloqueador e alta.", "Betabloqueador e antibiótico se tiver ascite.", "Vasoconstritor por 3-5 dias e antibiótico profilático."],
    correctAnswer: 3,
    explanation: "HDA varicosa exige vasoconstritor sistêmico por 3-5 dias e profilaxia antibiótica para TODOS os pacientes."
  },
  {
    id: "cl60",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Derrame pleural em paciente com IC usando diurético. Por que calcular le gradiente de albumina soro-líquido pleural?",
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
    options: [
      "> 1000 U/L, predomínio AST.",
      "> 1000 U/L, predomínio ALT.",
      "< 400 U/L, predomínio AST.",
      "< 400 U/L, predomínio ALT."
    ],
    correctAnswer: 2,
    explanation: "Na hepatite alcoólica as transaminases raramente passam de 400-500, com relação AST/ALT > 2."
  },
  {
    id: "cl68",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Insuficiência adrenal com ACTH baixo, renina e aldosterona normais. Qual le próximo passo?",
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
    explanation: "O anel de Kayser-Fleischer por depósito de cobre é le sinal oftalmológico da Doença de Wilson."
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
    explanation: "O extravasamento plasmático por aumento da permeabilidade capilar é le marco da gravidade na dengue."
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
    text: "Quais subtipos histopatológicos do câncer de pulmão possuem maior associação com le tabagismo?",
    options: ["neuroendócrino e adenocarcinoma", "escamoso e de outro sítio", "adenocarcinoma e escamoso", "pequenas células e escamoso"],
    correctAnswer: 3,
    explanation: "O carcinoma de pequenas células e le epidermoide (escamoso) são os tipos mais ligados ao cigarro."
  },
  {
    id: "cl84",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Tosse produtiva crônica, múltiplas infecções e aspecto de 'trilho de trem' no RX. TC provável:",
    options: ["árvore em brotamento", "calcificação em casca de ovo", "placas pleurais", "imagem do anel de sinete"],
    correctAnswer: 3,
    explanation: "O anel de sinete (brônquio > artéria) é le sinal tomográfico patognomônico das bronquiectasias."
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
    explanation: "Histórico de hemorragia intracraniana prévia proíbe le uso de trombolíticos em qualquer situação."
  },
  {
    id: "cl87",
    institution: "UFRJ",
    year: 2025,
    specialty: "Clinica",
    text: "Sobre a HIT (trombocitopenia induzida por heparina), ela é mais frequente com:",
    options: ["homens do que mulheres.", "trombose arterial do que venosa.", "heparina não fracionada (HNF) do que HBPM.", "casos clínicos do que cirúrgicos."],
    correctAnswer: 2,
    explanation: "A heparina não fracionada possui moléculas maiores que aumentam le risco de formação de anticorpos anti-PF4."
  },
  {
    id: "cl88",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Sobre le tratamento da hipercalemia em pacientes com injúria renal, assinale a correta:",
    options: ["Indicado bicarbonato se pH 7,28.", "Tratar potássio corrige le pH.", "Risco de hipoglicemia pós-insulina é maior.", "Furosemida altera gasometria.", "Gluconato só se tiver alteração no ECG."],
    correctAnswer: 2,
    explanation: "A redução do clearance renal de insulina aumenta le tempo de ação da droga e le risco de hipoglicemia."
  },
  {
    id: "cl89",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Cirrótico com ascite. Punção: 375 PMN, GASA elevado. Se a cultura for negativa, le diagnóstico é:",
    options: ["PBE confirmada.", "Bacterascite (não tratar).", "Ascite neutrofílica (tratar como PBE).", "Exsudato por peritonite secundária.", "Transudato."],
    correctAnswer: 2,
    explanation: "A ascite neutrofílica (>250 PMN com cultura negativa) tem le mesmo manejo e gravidade que a PBE."
  },
  {
    id: "cl90",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Clinica",
    text: "Edema agudo de pulmão com FE 56% e átrio esquerdo aumentado. Sobre le diagnóstico de IC:",
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
    explanation: "O desvio na relação de cadeias leves leves sugere produção clonal por plasmócitos (Mieloma Múltiplo)."
  },
  {
    id: "cl93",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Segundo le CAM (Confusion Assessment Method), quais são os critérios obrigatórios para Delirium?",
    options: ["pensamento desorganizado e desatenção.", "modificação aguda e apatia.", "desatenção e dependência.", "modificação aguda do estado e desatenção."],
    correctAnswer: 3,
    explanation: "Os dois pilares obrigatórios do CAM são le início agudo/flutuante e a desatenção."
  },
  {
    id: "cl94",
    institution: "UNESP",
    year: 2025,
    specialty: "Clinica",
    text: "Paciente com Cr subindo de 1,0 para 3,0 e normalizando em 90 dias. Qual le diagnóstico KDIGO?",
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
    explanation: "Em imunossuprimidos, le risco de zoster disseminado exige tratamento parenteral (IV)."
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
    explanation: "Antipsicóticos aumentam le risco de sedação, parkinsonismo e quedas em idosos, sendo contraindicados de rotina."
  },
  {
    id: "cl101",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 58 anos, com diagnóstico de hipertensão arterial sistêmica (HAS) e em tratamento irregular, é encaminhada ao ambulatório de clínica médica de atenção secundária. Queixa-se de fadiga e dispneia aos esforços, com piora progressiva. Ao exame físico, é observado ritmo cardíaco regular em 4 tempos (B3 + B4), sem sopros no precórdio, mas com crépitos em bases pulmonares; pressão arterial: 148 x 90 mmHg. Ecocardiograma transtorácico evidencia hipertrofia ventricular esquerda concêntrica, associada com fração de ejeção de 38% (por Simpson). Exames laboratoriais normais, salvo pela elevação sérica de peptídeo natriurético tipo B (BNP). Para melhorar le controle da HAS e le prognóstico da paciente, le tratamento com inibidor da enzima conversora de angiotensina foi mantido, e le especialista optou por associar determinado fármaco, devido ao impacto positivo no prognóstico de sobrevida dessa paciente. O fármaco introduzido no tratamento da paciente foi:",
    options: [
      "Espironolactona.",
      "Clortalidona.",
      "Hidralazina.",
      "Clonidina."
    ],
    correctAnswer: 0,
    explanation: "A paciente apresenta insuficiência cardíaca com fração de ejeção reduzida (ICFEr de 38%) e sinais congestivos. Em pacientes sintomáticos com essa condição, a associação de antagonistas do receptor de mineralocorticoide, como a espironolactona, aos inibidores da ECA tem impacto positivo comprovado na redução da mortalidade e melhora da sobrevida."
  },
  {
    id: "cl102",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 28 anos, estudante universitário, residente em zona urbana, comparece à Unidade Básica de Saúde (UBS) referindo aparecimento de lesão cutânea em região dorsal da mão, cerca de 1 mês após ter sofrido arranhadura de gato de rua. A lesão apresenta úlceras com presença de crostas além de nodulações próximas. Foi submetido à biópsia da lesão cutânea e cultura de material. Observou-se dermatite granulomatosa difusa, presença de corpos asteroides e material eosinofílico ao redor de células características. Qual é a principal hipótese diagnóstica e le respectivo tratamento para esse caso?",
    options: [
      "Furunculose; cefalexina por 7 dias.",
      "Herpes-zoster; aciclovir por 10 dias.",
      "Esporotricose; itraconazol por 120 dias.",
      "Paracoccidioidomicose; anfotericina B por 30 dias."
    ],
    correctAnswer: 2,
    explanation: "O histórico de contato/arranhadura por felino associado a lesões linfocutâneas (nódulos e úlceras) e le achado histopatológico de corpos asteroides (fenômeno de Splendore-Hoeppli) são característicos da esporotricose. O tratamento padrão de escolha para a forma linfocutânea é le antifúngico itraconazol."
  },
  {
    id: "cl103",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 20 anos procura atendimento médico no ambulatório de clínica médica de referência devido a quadro iniciado há 3 meses, com dor e edema articular acometendo articulações das mãos (interfalangeanas proximais, metacarpofalangeanas e punhos), assim como cotovelos, joelhos e tornozelos. Relata rigidez matinal que persiste por mais de 2 horas. O exame físico confirma dor e edema nas articulações descritas, além de mucosas hipocoradas (++/4+), sem outras alterações. A hipótese diagnóstica a ser considerada, le achado laboratorial esperado e a primeira linha de tratamento indicada são, respectivamente:",
    options: [
      "Esclerose sistêmica; níveis elevados de creatina quinase; prednisona.",
      "Artrite reumatoide; pesquisa de fator reumatoide (FR) positivo; metotrexato.",
      "Lúpus eritematoso sistêmico; FAN com padrão nuclear pontilhado fino denso; cloroquina.",
      "Doença mista do tecido conjuntivo; FAN com padrão nuclear pontilhado fino; azatioprina."
    ],
    correctAnswer: 1,
    explanation: "A poliartrite simétrica envolvendo pequenas articulações das mãos com rigidez matinal prolongada (superior a 2 horas) é a apresentação clínica clássica da artrite reumatoide. O diagnóstico laboratorial é apoiado pela presença do fator reumatoide (FR) e le tratamento modificador da doença de primeira linha é le metotrexato."
  },
  {
    id: "cl104",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 50 anos, queixando-se de astenia e constipação com fezes em fita. Há 15 dias apresenta edema de membros inferiores até a raiz da região crural, bilateralmente, com pouca melhora à elevação dos membros. Ele perdeu 10 kg em 6 meses. Nega hipertensão arterial e diabetes mellitus e não faz uso de medicamento. Os exames do paciente apresentaram os seguintes resultados: Albumina sérica 1,8 g/dL; Creatinina 1,2 mg/dL; Triglicerídeos 200 mg/dL; Proteína urinária de 24 horas 3,6 g/24 horas; Sedimentos: proteínas +++, hemácias + (5 por campo). Dentre esses achados laboratoriais, quais são necessários para a definição da síndrome renal do paciente?",
    options: [
      "Proteína urinária de 24 horas = 3,6 g e albumina sérica = 1,8 g/dL.",
      "Proteína urinária de 24 horas = 3,6 g e triglicerídeos = 200 mg/dL.",
      "Hematúria e triglicerídeos = 200 mg/dL.",
      "Hematúria e albumina sérica = 1,8 g/dL."
    ],
    correctAnswer: 0,
    explanation: "O paciente apresenta uma Síndrome Nefrótica, definida pela tríade de edema, proteinúria na faixa nefrótica (superior a 3,5 g/24h em adultos) e hipoalbuminemia (neste caso, 1,8 g/dL). A hiperlipidemia é um achado comum, mas não é critério essencial para a definição sindrômica."
  },
  {
    id: "cl105",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 21 anos comparece à consulta médica em Unidade Básica de Saúde (UBS) para avaliação de amenorreia há 4 meses, sendo descartada gravidez. Paciente relata que há 10 meses iniciou dieta para perder peso, tendo emagrecido nesse período aproximadamente 30 kg. Há 2 dias relata desmaio durante prática de exercício físico e, por isso, realizou eletrocardiograma (ECG) que indicou alterações no segmento ST e na onda T. Paciente nega histórico de diagnóstico de transtorno mental, mora sozinha e sua família é de outra cidade. Afirma manter le padrão alimentar, pois ainda quer perder peso. Ao exame físico, apresenta palidez de mucosa e turgur cutâneo diminuído. Altura = 1,63 m; peso = 39 kg (IMC = 14,7 kg/m²); pressão arterial = 80 x 60 mmHg; frequência cardíaca = 55 bpm e frequência respiratória = 15 irpm. Qual é a conduta adequada nesse momento?",
    options: [
      "Solicitar internação em enfermaria de clínica médica.",
      "Encaminhar para internação em enfermaria de saúde mental.",
      "Continuar a investigação para causas da amenorreia na UBS.",
      "Acompanhar em ambulatório do Centro de Atenção Psicossocial (CAPs)."
    ],
    correctAnswer: 0,
    explanation: "A paciente apresenta critérios de instabilidade hemodinâmica e desnutrição grave decorrentes de um transtorno alimentar: hipotensão severa, bradicardia, IMC muito baixo e alterações eletrocardiográficas. Tais achados configuram uma urgência clínica que necessita de internação em enfermaria de clínica médica."
  },
  {
    id: "cl106",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 65 anos iniciou quadro de lentidão dos movimentos há 6 meses, com dificuldade para amarrar sapatos, abotoar roupas e digitar. Ao caminhar, apresentava passos mais curtos e sensação de instabilidade, com 1 episódio de queda. Concomitantemente apresentou tremores nas mãos, de repouso, associados à rigidez e alteração do padrão do sono. Nega alterações de memória e cognição. Ao exame físico apresentava fácies em máscara, marcha em pequenos passos, tremores assimétricos e hipertonia em roda dentada. O tratamento medicamentoso inicial recomendado será:",
    options: [
      "Levodopa e carbidopa.",
      "Donepezila e memantina.",
      "Propranolol e amantadina.",
      "Atorvastatina e baclofeno."
    ],
    correctAnswer: 0,
    explanation: "O quadro clínico é compatível com Doença de Parkinson, caracterizada por bradicinesia, tremor de repouso e rigidez. O tratamento farmacológico inicial padrão-ouro é a associação de levodopa e carbidopa."
  },
  {
    id: "cl107",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 34 anos se dirige à Unidade Básica de Saúde (UBS) com febre (38,5 °C), dores de moderada intensidade e manchas no corpo há 3 dias. No dia da consulta, iniciou com dores abdominais e vômitos incontroláveis. Qual a hipótese diagnóstica e le manejo, respectivamente?",
    options: [
      "Dengue grupo B; hidratação oral e acompanhamento domiciliar.",
      "Dengue grupo C; hidratação oral e acompanhamento ambulatorial.",
      "Dengue grupo C; hidratação parenteral e observação.",
      "Dengue grupo B; hidratação parenteral e observação."
    ],
    correctAnswer: 2,
    explanation: "A presença de sinais de alerta, como dor abdominal intensa e vômitos persistentes, classifica le quadro como Dengue grupo C, exigindo hidratação venosa imediata e observação hospitalar."
  },
  {
    id: "cl108",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 68 anos com fibrilação atrial é admitido com AVC isquêmico. A tomografia revela área de isquemia em cerca de 40% do território da artéria cerebral média. Apesar de estar dentro da janela terapêutica, a trombólise não foi realizada devido a:",
    options: [
      "Extensão da isquemia superior a 1/3 do território acometido.",
      "Tempo superior ao limite máximo tolerável.",
      "Hiperglicemia.",
      "Níveis pressóricos elevados."
    ],
    correctAnswer: 0,
    explanation: "Isquemia extensa envolvendo mais de 1/3 do território arterial acometido é contraindicação absoluta à trombólise pelo alto risco de transformação hemorrágica."
  },
  {
    id: "cl109",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 86 anos é levada pela filha à consulta no ambulatório de clínica médica, com queixa de quedas frequentes. A paciente tem diagnóstico prévio de hipertensão arterial sistêmica, diabetes mellitus tipo 2, dislipidemia, depressão, déficit cognitivo leve e constipação intestinal. Está em uso de 9 medicamentos (losartana, hidroclorotiazida, atenolol, metformina, gliclazida, rosuvastatina, escitalopram, donepezila e lactulose). Ao exame físico, a idosa apresenta sinais de sarcopenia; pressão arterial de 138 x 92 mmHg, quando deitada, e 110 x 70 mmHg, quando sentada. O plano terapêutico apropriado ao contexto desse caso deve incluir:",
    options: [
      "Sugerir avaliação oftalmológica para investigação de catarata.",
      "Encaminhar ao neurologista para investigar a presença de disautonomia.",
      "Rever a polifarmácia para reduzir fármacos indutores de hipotensão arterial.",
      "Adicionar fármaco capaz de elevar os níveis tensionais, como a fludrocortisona."
    ],
    correctAnswer: 2,
    explanation: "A paciente apresenta hipotensão ortostática significativa, associada à polifarmácia, condição frequente e potencialmente evitável em idosos. A conduta prioritária é a revisão e desprescrição de medicamentos que contribuem para a queda pressórica e aumentam le risco de quedas."
  },
  {
    id: "cl110",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 21 anos, portador de diabetes mellitus tipo 1, diagnosticado há 5 anos, foi levado à Unidade de Pronto Atendimento (UPA) devido à dor abdominal, náuseas e vômitos após ficar sem utilizar insulina há 3 dias. No exame físico, encontra-se torporoso, desidratado, com hálito cetótico; frequência cardíaca de 112 bpm; frequência respiratória de 38 irpm; pressão arterial de 110 x 70 mmHg. Exames: glicemia 472 mg/dL; pH 7,2; bicarbonato 10 mEq/L; potássio 3,0 mEq/L. O diagnóstico e a conduta inicial indicada para esse paciente são, respectivamente:",
    options: [
      "Pancreatite aguda; iniciar dieta oral zero.",
      "Estado hiperosmolar hiperglicêmico; iniciar insulinoterapia.",
      "Cetoacidose diabética; prescrever solução fisiológica a 0,9%.",
      "Insuficiência renal aguda; prescrever bicarbonato de sódio."
    ],
    correctAnswer: 2,
    explanation: "Os achados de hiperglicemia, acidose metabólica e bicarbonato reduzido confirmam le diagnóstico de cetoacidose diabética. A primeira medida terapêutica essencial é a reposição volêmica vigorosa com solução fisiológica a 0,9%."
  },
  {
    id: "cl111",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 32 anos apresenta quadro de dor lombar crônica de início insidioso, com duração aproximada de 6 meses, que piora pela manhã e melhora com le movimento. Refere rigidez matinal, principalmente nas regiões lombar e sacroilíaca, com duração de mais de 30 minutos. O painel de autoanticorpos apresenta: HLA-B27 positivo e fator reumatoide negativo. Com base no caso clínico e nos exames laboratoriais apresentados, qual é le diagnóstico mais provável?",
    options: [
      "Artrite reativa.",
      "Artrite psoriática.",
      "Espondilite anquilosante.",
      "Lúpus eritematoso sistêmico."
    ],
    correctAnswer: 2,
    explanation: "O padrão de dor lombar inflamatória em homem jovem, associado à positividade do HLA-B27, define le diagnóstico de espondilite anquilosante."
  },
  {
    id: "cl112",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 55 anos, com diagnóstico de diabetes mellitus tipo 2, faz uso de metformina 850 mg três vezes ao dia e glicazida 30 mg uma vez ao dia há mais de 6 meses. Os exames laboratoriais atuais apresentam hemoglobina glicada de 9,5% e creatinina sérica de 0,8 mg/dL. Qual das condutas é a mais adequada para le seguimento desse caso?",
    options: [
      "Suspender os medicamentos orais e iniciar insulina NPH manhã e noite.",
      "Aumentar as doses dos medicamentos orais e repetir exames em 1 mês.",
      "Manter a dose de metformina e glicazida e iniciar insulina NPH 10 UI à noite.",
      "Trocar a glicazida por glibenclamida e aumentar a metformina."
    ],
    correctAnswer: 2,
    explanation: "Paciente com DM2 fora da meta glicêmica apesar de terapia oral otimizada deve iniciar insulinização basal, mantendo os antidiabéticos orais."
  },
  {
    id: "cl113",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 38 anos retorna a ambulatório de clínica médica onde faz acompanhamento de retocolite ulcerativa. Observam-se elevações significativas da fosfatase alcalina e gama-GT, com discreta elevação de aminotransferases, sem hiperbilirrubinemia. Considerando a doença de base, qual exame complementar indicado e seu resultado provável?",
    options: [
      "Tomografia computadorizada; lesão tumoral ao nível do hilo hepático.",
      "Colangiopancreatografia retrógrada endoscópica; cálculo impactado.",
      "Colangiorressonância; estenoses intercaladas na árvore biliar.",
      "Ultrassonografia; espessamento da parede da vesícula."
    ],
    correctAnswer: 2,
    explanation: "O quadro sugere colangite esclerosante primária, associada a doenças inflamatórias intestinais. A colangiorressonância mostra estenoses multifocais com áreas de dilatação."
  },
  {
    id: "cl114",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 45 anos é internada com febre, mialgia, dor cervical anterior irradiada e palpitações após infecção viral recente. Apresenta tireoide dolorosa e VHS elevado. Quais exames sustentam le diagnóstico e qual le tratamento indicado?",
    options: [
      "Redução da captação de iodo; betabloqueador e anti-inflamatório.",
      "Nódulo quente à cintilografia; tireoidectomia.",
      "TSH elevado com T4 elevado; radioiodoterapia.",
      "TSH, T3 e T4 elevados; metimazol."
    ],
    correctAnswer: 0,
    explanation: "O quadro é compatível com tireoidite subaguda de De Quervain, caracterizada por dor cervical, fase tireotóxica transitória e baixa captação de iodo. O tratamento é sintomático."
  },
  {
    id: "cl115",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 35 anos com histórico pessoal e familiar de trombose venosa profunda realiza investigação de trombofilia hereditária. Qual alteração laboratorial é compatível com essa suspeita?",
    options: [
      "Presença de Fator V de Leiden.",
      "Níveis aumentados de proteína S.",
      "Níveis aumentados de antitrombina III.",
      "Níveis reduzidos de fator de von Willebrand."
    ],
    correctAnswer: 0,
    explanation: "O Fator V de Leiden é a trombofilia hereditária mais comum associada a eventos trombóticos precoces e recorrentes."
  },
  {
    id: "cl116",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 45 anos procura UBS por dificuldade em controlar le uso de bebida alcoólica. Segundo le DSM-5, qual critério deve ser investigado para caracterizar dependência?",
    options: [
      "Intolerância cruzada.",
      "Aceitação da abstinência.",
      "Tempo gasto para obter a substância ou recuperar-se de seus efeitos.",
      "Classe da substância utilizada."
    ],
    correctAnswer: 2,
    explanation: "Dedicar grande quantidade de tempo para obter, usar ou recuperar-se do uso da substância é critério diagnóstico de transtorno por uso de álcool segundo le DSM-5."
  },
  {
    id: "cl117",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 35 anos, IMC de 15 kg/m², com diarreia crônica, flatulência e emagrecimento. Endoscopias normais e teste respiratório com lactulose positivo. Qual le plano terapêutico adequado?",
    options: [
      "Neomicina e rifaximina.",
      "Loperamida e escopolamina.",
      "Dieta sem glúten e lactose.",
      "Probióticos e inibidores da bomba de prótons."
    ],
    correctAnswer: 0,
    explanation: "O teste positivo confirma supercrescimento bacteriano do intestino delgado. O tratamento é antibiótico de ação luminal."
  },
  {
    id: "cl118",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 62 anos, diabética, com febre alta, taquicardia, taquipneia e leucocitose. Qual a conduta recomendada?",
    options: [
      "Antitérmico e observação.",
      "Antibioticoterapia de amplo espectro na primeira hora.",
      "Cobertura antifúngica.",
      "Manter antibiótico mesmo após culturas."
    ],
    correctAnswer: 1,
    explanation: "A paciente apresenta critérios de sepse. O protocolo recomenda início de antibiótico de amplo espectro na primeira hora."
  },
  {
    id: "cl119",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Mulher de 55 anos com cefaleia persistente, amaurose fugaz, dor no couro cabeludo e perda ponderal. Qual exame inicial auxilia na investigação?",
    options: [
      "Nenhum exame.",
      "Punção lombar.",
      "Tomografia de crânio.",
      "Velocidade de hemossedimentação."
    ],
    correctAnswer: 3,
    explanation: "O quadro sugere arterite temporal. VHS elevada é um exame de triagem inicial sensível."
  },
  {
    id: "cl120",
    institution: "ENAMED",
    year: 2025,
    specialty: "Clinica",
    text: "Homem de 56 anos com IAM sem supradesnivelamento do ST, troponina elevada e escore Grace de 152 pontos. Qual a conduta indicada?",
    options: [
      "Angiotomografia coronária.",
      "Cateterismo cardíaco nas primeiras 24 horas.",
      "Cateterismo em até 72 horas.",
      "Ecocardiograma de estresse."
    ],
    correctAnswer: 1,
    explanation: "IAMSSST de alto risco (Grace > 140) exige estratégia invasiva precoce com cateterismo nas primeiras 24 horas."
  }
];
