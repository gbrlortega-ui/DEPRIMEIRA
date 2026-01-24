
import { Question } from '../../types';

export const preventivaQuestions: Question[] = [
  {
    id: "pr1",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Numa Unidade Básica de Saúde (UBS) as Equipes de Saúde da Família identificaram grupos populacionais socialmente vulneráveis que residem longe da UBS (moradores de microáreas com moradia precária e população jovem) e idosos com dificuldades de deslocamento. As equipes decidiram: reservar vagas para demanda espontânea para captar pessoas com dificuldade de acessibilidade; instituir consultório avançado nas microáreas de população mais vulnerável; e realizar visitas domiciliares para idosos mais fragilizados. As medidas planejadas buscam efetivar qual dos princípios do SUS?",
    options: ["Integralidade.", "Equidade.", "Regionalização.", "Acessibilidade."],
    correctAnswer: 1,
    explanation: "O princípio da equidade busca corrigir desigualdades, priorizando pessoas com maior necessidade ou dificuldade de acesso. Medidas como consultório avançado e visitas domiciliares tratam desiguais de forma diferente para alcançar igualdade de cuidado."
  },
  {
    id: "pr2",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Em abril de 2020, o Ministério da Saúde divulgou documento sobre a acurácia de testes diagnósticos para COVID-19. Foram apresentados dois testes: Teste A (Sensibilidade 86% e Especificidade 95%) e Teste B (Sensibilidade 70% e Especificidade 97%). Qual destes testes consegue identificar melhor os doentes, sendo mais útil para triagem?",
    options: [
      "Teste B, pois tem maior especificidade do que o teste A.",
      "Teste B, pois a relação entre a sensibilidade e a especificidade é 0,72.",
      "Teste A, pois a relação entre a sensibilidade e a especificidade é 0,90.",
      "Teste A, pois tem maior sensibilidade do que o teste B."
    ],
    correctAnswer: 3,
    explanation: "Testes de triagem devem tel alta sensibilidade para reduzir falsos negativos. O Teste A possui sensibilidade de 86%, maior que os 70% do Teste B, sendo melhor para identificar doentes."
  },
  {
    id: "pr3",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Com o objetivo de diminuir a incidência de infecções pós-operatórias, um hospital levantou dados em quatro setores: Ortopedia (15 casos / 3000 cirurgias), Neurocirurgia (3 / 300), Trauma (50 / 5000) e Cirurgia Abdominal (30 / 1500). Qual é o setor com maior coeficiente de incidência de infecções pós-operatórias?",
    options: ["Ortopedia.", "Cirurgia abdominal.", "Neurocirurgia.", "Trauma."],
    correctAnswer: 1,
    explanation: "Coeficiente de incidência = casos novos / população exposta. Ortopedia: 0,005; Neurocirurgia: 0,01; Trauma: 0,01; Cirurgia Abdominal: 0,02. O maior foi em Cirurgia Abdominal."
  },
  {
    id: "pr4",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Menino de 8 anos, há 3 dias com fezes líquidas e mais de 4 evacuações diárias, sem febre e hidratado. A mãe relata que há várias crianças na escola com quadro semelhante. Qual é o diagnóstico e o manejo mais adequados, incluindo a notificação?",
    options: [
      "Síndrome diarreica aguda de provável origem bacteriana; sintomáticos, sem notificação.",
      "Disenteria; administrar antibiótico e realizar visita à escola para averiguações.",
      "Diarreia aguda de provável origem bacteriana; prescrever antibióticos e notificar.",
      "Síndrome diarreica aguda, de provável origem viral; sintomáticos, hidratação e notificação do caso à vigilância pela suspeita de surto."
    ],
    correctAnswer: 3,
    explanation: "O quadro é típico de síndrome diarreica aguda provavelmente viral. A ocorrência de vários casos na escola caracteriza suspeita de surto, exigindo notificação à vigilância epidemiológica."
  },
  {
    id: "pr5",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Adolescente de 15 anos, em situação de rua e usuário crônico de substâncias, é atendido em UPA em confusão mental. Após estabilização clínica, qual deve ser a conduta adequada dentro do SUS?",
    options: [
      "Após alta clínica, orientá-lo a procurar a Unidade Básica de Saúde.",
      "Encaminhar para internação hospitalar compulsória para desintoxicação.",
      "Encaminhar ao serviço social da UPA para contato com familiares antes da alta.",
      "Encaminhar para o Centro de Atenção Psicossocial Infantil (CAPSi) de referência para acolhimento e Projeto Terapêutico Individual."
    ],
    correctAnswer: 3,
    explanation: "O adolescente com transtorno mental e dependência deve ser acompanhado pela RAPS. O CAPSi é o serviço especializado responsável pela construção do Projeto Terapêutico Individual."
  },
  {
    id: "pr6",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Lactente de 10 meses, com febre alta, tosse seca, coriza, conjuntivite e exantema maculopapular. Qual é a conduta em vigilância epidemiológica, além de solicitar sorologia IgM?",
    options: [
      "Notificar caso suspeito de sarampo e indicar bloqueio vacinal seletivo para não vacinados acima de 6 meses em até 72h.",
      "Notificar caso confirmado de sarampo e indicar vacinação para todos em até 72h.",
      "Notificar caso suspeito e indicar vacinação para todos os contactantes domésticos em até 72h.",
      "Notificar caso confirmado e indicar bloqueio vacinal seletivo em até 72h."
    ],
    correctAnswer: 0,
    explanation: "Quadro típico de sarampo exige notificação compulsória imediata como caso suspeito. Realiza-se o bloqueio vacinal seletivo dos contatos não vacinados (a partir de 6 meses) em até 72 horas."
  },
  {
    id: "pr7",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Em estudo longitudinal, encontrou-se risco relativo (RR) = 6 e risco atribuível proporcional populacional (RAPP) = 69% para a associação entre exposição à sílica e tuberculose pulmonar. Qual a interpretação correta?",
    options: [
      "Expostos à sílica têm risco 6 vezes maior e a eliminação redundaria em 69 casos.",
      "A exposição confere risco elevado, variando de 6 a 69 vezes.",
      "Não expostos têm apenas 31% de risco de desenvolver a doença.",
      "Expostos têm risco 6 vezes maior e a eliminação da exposição reduziria 69% dos casos na população."
    ],
    correctAnswer: 3,
    explanation: "RR = 6 indica que o risco é 6 vezes maior nos expostos. RAPP = 69% significa que 69% dos casos na população seriam evitados se o fator de risco fosse removido."
  },
  {
    id: "pr8",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Mulher de 58 anos, hipertensa e diabética, após alta hospitalar procura a UBS. Lá, medicações são ajustadas, prescrições unificadas, feita referência ao especialista e nota de alta registrada. Qual atributo da APS está mais bem exemplificado?",
    options: ["Longitudinalidade.", "Coordenação do cuidado.", "Orientação comunitária.", "Competência cultural."],
    correctAnswer: 1,
    explanation: "A coordenação do cuidado garante a continuidade da informação e a articulação entre os pontos da rede de atenção, integrando o cuidado recebido no hospital com a APS."
  },
  {
    id: "pr9",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Homem de 52 anos, biólogo, retorna de viagem à região amazônica há 6 dias, com quadro agudo de mal-estar, febre alta, icterícia, dor abdominal e vômito com sangue. Qual a principal hipótese diagnóstica?",
    options: ["Febre amarela.", "Febre de Marburg.", "Febre maculosa.", "Febre tifoide."],
    correctAnswer: 0,
    explanation: "Febre alta, icterícia e hemorragias em paciente vindo de área endêmica com período de incubação compatível sugerem febre amarela grave."
  },
  {
    id: "pr10",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Homem de 65 anos, assintomático, procura a USF para orientações sobre rastreamento do câncer de próstata. Qual é a orientação correta?",
    options: [
      "Solicitar PSA associado ao toque retal.",
      "Solicitar PSA e, se alterado, realizar o toque retal.",
      "Individualizar e compartilhar a decisão frente aos riscos e benefícios associados ao rastreamento.",
      "Solicitar PSA e, se alterado, encaminhar ao urologista."
    ],
    correctAnswer: 2,
    explanation: "Para rastreamento de câncer de próstata em assintomáticos, as diretrizes recomendam a decisão compartilhada, explicando que os benefícios são incertos e há riscos de sobrediagnóstico."
  },
  {
    id: "pr11",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Mulher de 68 anos com negligência familiar identificada em visita domiciliar. Filho e nora recusam levá-la ao médico. Qual ação é mais adequada?",
    options: [
      "Preencher ficha de notificação compulsória de violência contra o idoso e encaminhar aos órgãos competentes.",
      "Respeitar o desejo de sigilo e apenas prover analgesia.",
      "Indicar cuidados paliativos exclusivos.",
      "Conversar com o filho para verificar se autoriza informar o Conselho do Idoso."
    ],
    correctAnswer: 0,
    explanation: "Negligência é uma forma de violência. A notificação compulsória é obrigatória por lei em casos de suspeita de violência contra o idoso, visando sua proteção."
  },
  {
    id: "pr12",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Equipe de USF acompanha familiares de hipertenso com COVID-19 e ajusta medicação de diabética baseada em especialista. Qual atributo essencial da APS é demonstrado?",
    options: ["Cuidado multidisciplinar.", "Orientação familiar.", "Coordenação do cuidado.", "Competência cultural."],
    correctAnswer: 2,
    explanation: "A capacidade de organizar e integrar informações de diferentes fontes e níveis de atenção define a coordenação do cuidado."
  },
  {
    id: "pr13",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Primigesta, 26 semanas. TOTG 75g: Jejum 85, 1h = 192, 2h = 180. Qual o diagnóstico e conduta?",
    options: [
      "Diabetes mellitus gestacional; manter acompanhamento na USF e encaminhar ao alto risco.",
      "Diabetes gestacional não detectado; manter risco habitual.",
      "Diabetes mellitus prévio; suspender acompanhamento na USF.",
      "Diabetes gestacional; iniciar insulina imediata na USF."
    ],
    correctAnswer: 0,
    explanation: "Valores de 1h ≥ 180 ou 2h ≥ 153 no TOTG confirmam DMG. É uma gestação de alto risco que exige seguimento especializado compartilhado com a APS."
  },
  {
    id: "pr14",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Em frigorífico, 10% dos trabalhadores apresentam tendinite. Esse percentual representa qual coeficiente?",
    options: ["Risco relativo.", "Prevalência.", "Risco absoluto.", "Incidência."],
    correctAnswer: 1,
    explanation: "A proporção de indivíduos que possuem a doença em um determinado ponto no tempo é a prevalência."
  },
  {
    id: "pr15",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Médico investiga se consumo de cigarros eletrônicos prejudica a ereção ao longo do tempo. Qual delineamento é mais adequado?",
    options: ["Estudo de caso-controle.", "Ensaio clínico randomizado.", "Estudo transversal analítico.", "Estudo de coorte prospectivo."],
    correctAnswer: 3,
    explanation: "O estudo de coorte acompanha grupos expostos e não expostos ao longo do tempo para observar a incidência do desfecho, sendo ideal para causalidade."
  },
  {
    id: "pr16",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Homem de 78 anos com orientação alimentar e fisioterapia pós-AVC. Quais níveis de prevenção?",
    options: ["Primária e terciária.", "Terciária e primária.", "Quaternária e secundária.", "Secundária e quaternária."],
    correctAnswer: 0,
    explanation: "Orientação alimentar previne o surgimento de fatores de risco (primária). Reabilitação visa reduzir sequelas de doença instalada (terciária)."
  },
  {
    id: "pr17",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Mulher com quadro de SRAG-hospitalizado. A notificação deve ocorrer em até:",
    options: ["48 horas.", "7 dias.", "24 horas após o atendimento.", "3 dias."],
    correctAnswer: 2,
    explanation: "Casos de Síndrome Respiratória Aguda Grave que exigem hospitalização são de notificação compulsória imediata (até 24 horas)."
  },
  {
    id: "pr18",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "A Política Nacional de Educação Popular em Saúde no SUS (PNEPS-SUS) é orientada, entre outros, pelo princípio:",
    options: [
      "Da transmissão de conhecimentos construídos historicamente.",
      "Do compromisso com a construção do projeto democrático e popular de sociedade justa e diversa.",
      "Da alicerçagem exclusiva no saber médico hegemônico.",
      "Da sujeição dos atores sociais às formas de opressão."
    ],
    correctAnswer: 1,
    explanation: "A PNEPS-SUS foca no diálogo de saberes e no fortalecimento da democracia e participação popular para uma sociedade mais justa."
  },
  {
    id: "pr19",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Homem assintomático, VDRL 1/128 e teste treponêmico reagente. Qual a melhor conduta?",
    options: [
      "Penicilina G Benzatina 7.200.000 UI (3 doses) e tratar parceiros.",
      "Sem necessidade de tratamento; repetir em 1 ano.",
      "Penicilina G Benzatina 2.400.000 UI (dose única).",
      "Controle de cura com FTA-Abs semestral."
    ],
    correctAnswer: 0,
    explanation: "Sífilis de duração indeterminada/latente tardia exige 3 doses de penicilina benzatina (intervalos semanais) e convocação de parceiros."
  },
  {
    id: "pr20",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Paciente precisa de tratamento especializado não disponível em sua região de saúde. Qual a conduta segundo o SUS?",
    options: [
      "Encaminhar para referência em outra região, custeando transporte e tratamento.",
      "Solicitar que aguarde disponibilidade local.",
      "Contratar equipe temporária local.",
      "Encaminhar para o privado de forma complementar."
    ],
    correctAnswer: 0,
    explanation: "O princípio da integralidade e a organização em redes garantem que o paciente acesse o serviço necessário em qualquer ponto da rede, com suporte de transporte se necessário."
  },
  {
    id: "pr21",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Mulher com glicemia de jejum de 119 mg/dL. Qual a conduta mais apropriada?",
    options: [
      "Acompanhamento anual sem intervenção.",
      "Confirmar diabetes e iniciar metformina.",
      "Confirmar pré-diabetes e iniciar intervenção no estilo de vida.",
      "Repetir em 3 meses para conclusão."
    ],
    correctAnswer: 2,
    explanation: "Glicemia entre 100-125 mg/dL define pré-diabetes, exigindo intervenção intensiva em dieta e exercícios."
  },
  {
    id: "pr22",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Paciente em tratamento de TB (RHZE) com visão turva e redução de campo visual. Qual a explicação?",
    options: [
      "Efeito da rifampicina.",
      "Complicação do diabetes.",
      "Hemorragia retiniana por varfarina.",
      "Toxicidade ocular do etambutol."
    ],
    correctAnswer: 3,
    explanation: "O etambutol pode causar neurite óptica retrobulbar, manifestada por baixa acuidade visual e alteração de cores. Exige suspensão da droga."
  },
  {
    id: "pr23",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Mulher com osteoartrite estabelecida e limitações. Qual conduta e nível de prevenção?",
    options: [
      "Não intervir — prevenção quaternária.",
      "Corticosteroide — prevenção secundária.",
      "Afastamento ocupacional — prevenção primária.",
      "Fisioterapia e educação em saúde — prevenção terciária."
    ],
    correctAnswer: 3,
    explanation: "A prevenção terciária atua na reabilitação e redução de incapacidades de doenças já manifestas."
  },
  {
    id: "pr24",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "'O SUS é o plano de saúde de todos e garante assistência em toda necessidade'. Quais princípios?",
    options: ["Integralidade e universalidade.", "Universalidade e equidade.", "Descentralização.", "Equidade."],
    correctAnswer: 0,
    explanation: "Acesso de 'todos' define universalidade. Assistência em 'toda necessidade' define integralidade."
  },
  {
    id: "pr25",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Criança com insegurança alimentar grave identificada pela ESF. Atuação prioritária?",
    options: [
      "Aguardar exames laboratoriais.",
      "Buscar doações comunitárias.",
      "Acionar rede intersetorial (assistência social) e articular com a escola (PNAE).",
      "Notificar o Conselho Tutelar por negligência."
    ],
    correctAnswer: 2,
    explanation: "A insegurança alimentar exige abordagem intersetorial, articulando saúde, assistência social e educação, sem necessariamente criminalizar a família."
  },
  {
    id: "pr26",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Rede articulada de serviços mínimos integrados em agrupamento geográfico contínuo. Conceito de:",
    options: ["Rede de Atenção.", "Região de saúde.", "Território.", "Mapa de saúde."],
    correctAnswer: 1,
    explanation: "Região de saúde é o recorte espacial estratégico para o planejamento e organização da rede de atenção."
  },
  {
    id: "pr27",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Idoso sem dinheiro para remédios pois filho usa seus proventos. Qual conduta?",
    options: [
      "Identificar violência patrimonial e realizar notificação compulsória.",
      "Respeitar autonomia e apenas registrar.",
      "Orientar procurar advogado.",
      "Encaminhar ao CAPS."
    ],
    correctAnswer: 0,
    explanation: "O uso indevido de bens e rendas do idoso é violência patrimonial e exige notificação compulsória por parte dos profissionais de saúde."
  },
  {
    id: "pr28",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Idosa com quedas recorrentes usa amitriptilina e diazepam. Medida para prevenir quedas?",
    options: [
      "Manter medicações.",
      "Suspender apenas diazepam.",
      "Suspender imediatamente ambos.",
      "Suspender amitriptilina e retirar gradativamente o diazepam."
    ],
    correctAnswer: 3,
    explanation: "Medicamentos psicotrópicos são fatores de risco evitáveis para quedas em idosos. A retirada deve ser planejada e segura."
  },
  {
    id: "pr29",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Homem em situação de rua, com sequela de AVC e sem apoio. Qual conduta adequada?",
    options: [
      "Orientar buscar Centro POP sozinho.",
      "Acolhimento pela ESF e Equipe de Consultório na Rua para Projeto Terapêutico Singular.",
      "Internação hospitalar prolongada.",
      "Orientar retorno à UPA conforme necessidade."
    ],
    correctAnswer: 1,
    explanation: "O Consultório na Rua é a estratégia da APS para garantir acesso e cuidado integral a essa população vulnerável."
  },
  {
    id: "pr30",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Adolescente de 16 anos quer ajuda para falar sobre sexualidade com a família. Conduta na APS?",
    options: [
      "Oferecer escuta ativa e disponibilidade para dialogar.",
      "Psicoterapia obrigatória.",
      "Dizer que é fase passageira.",
      "Postergar por ser menor."
    ],
    correctAnswer: 0,
    explanation: "A APS deve ser um espaço de acolhimento ético e livre de julgamentos para questões de sexualidade e identidade."
  },
  {
    id: "pr31",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Qual recurso é padrão-ouro para avaliar perda de sensibilidade protetora nos pés de diabéticos?",
    options: ["Monofilamento de 10 g.", "Martelo de reflexos.", "Palito ou pino.", "Diapasão 128 Hz."],
    correctAnswer: 0,
    explanation: "O teste com monofilamento Semmes-Weinstein de 10g é a ferramenta mais sensível para detectar risco de ulceração neuropática."
  },
  {
    id: "pr32",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Médico quebra sigilo de adolescente com risco iminente de autoextermínio. Conduta ética?",
    options: [
      "Incorreta, fere o sigilo.",
      "Correta, quebra é independente da vontade.",
      "Incorreta, desrespeita confiança.",
      "Correta, prioriza a preservação da vida diante de risco grave."
    ],
    correctAnswer: 3,
    explanation: "O dever de preservação da vida e a prevenção de dano grave justificam legal e eticamente a quebra do sigilo profissional."
  },
  {
    id: "pr33",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Cálculo da Razão de Mortalidade Materna (RMM) em município com 78 óbitos e 68.500 NV:",
    options: ["7,8.", "113,9.", "26.", "11,3."],
    correctAnswer: 1,
    explanation: "RMM = (Óbitos Maternos / Nascidos Vivos) * 100.000. (78 / 68.500) * 100.000 ≈ 113,9."
  },
  {
    id: "pr34",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Sobre o PSA no rastreamento do câncer de próstata, é correto afirmar:",
    options: [
      "Exclui neoplasia se ausência de sintomas.",
      "Não distingue tumores indolentes de agressivos.",
      "PSA livre define extensão da malignidade.",
      "Nódulo ao toque isolado indica biópsia."
    ],
    correctAnswer: 1,
    explanation: "O PSA tem baixa especificidade para tumores clinicamente significativos, podendo elevar-se em condições benignas."
  },
  {
    id: "pr35",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Pesquisadores selecionam hipertensos (casos) e saudáveis (controles) e olham para o passado. Estudo:",
    options: ["Ecológico.", "Experimental.", "Observacional tipo caso-controle.", "Descritivo transversal."],
    correctAnswer: 2,
    explanation: "Estudos que partem do efeito (doença) para a causa (exposição) são retrospectivos do tipo caso-controle."
  },
  {
    id: "pr36",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Discrepância de 5 cm entre Altura Uterina e IG (34 semanas). Qual conduta?",
    options: [
      "Cardiotocografia de urgência.",
      "USG obstétrica para avaliar crescimento e líquido.",
      "Reavaliar em 1 semana.",
      "Manter rotina."
    ],
    correctAnswer: 1,
    explanation: "A discrepância significativa exige exclusão de restrição de crescimento fetal (RCIU) ou alterações de líquido amniótico."
  },
  {
    id: "pr37",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Gestante com AIDS e TB evolui com insuficiência respiratória. Sequência na DO:",
    options: [
      "Causa básica: TB.",
      "Causa básica: Gestação.",
      "Causa terminal na Parte II.",
      "Parte I: terminal (Insuf. Resp) <- intermediária (TB) <- básica (AIDS). Parte II: Gestação."
    ],
    correctAnswer: 3,
    explanation: "A AIDS é a causa básica que desencadeou a TB e a insuficiência respiratória. A gestação é fator contribuinte no óbito não obstétrico direto."
  },
  {
    id: "pr38",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Adolescente com IMC acima do percentil 97 e acantose nigricans. Diagnóstico e conduta?",
    options: [
      "Sobrepeso; observar.",
      "Kwashiorkor.",
      "Obesidade; reeducação alimentar familiar e atividade física.",
      "Obesidade; pedir exames antes de intervir."
    ],
    correctAnswer: 2,
    explanation: "IMC > P97 define obesidade. A acantose indica resistência insulínica, reforçando a necessidade de intervenção imediata no estilo de vida."
  },
  {
    id: "pr39",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "População em situação de rua com Tuberculose. Abordagem preferencial:",
    options: [
      "Internação compulsória.",
      "Abstinência de drogas obrigatória.",
      "TDO domiciliar com família.",
      "Equipe de Consultório na Rua para TDO supervisionado."
    ],
    correctAnswer: 3,
    explanation: "O Tratamento Diretamente Observado (TDO) via Consultório na Rua é a melhor estratégia de adesão para pacientes sem moradia fixa."
  },
  {
    id: "pr40",
    institution: "Simulado",
    year: 2024,
    specialty: "Preventiva",
    text: "Sobre a fisiopatologia da Hipertensão Arterial Essencial:",
    options: [
      "Deve-se à elevação do cálcio sérico.",
      "É multifatorial: genética, SNA, SRAA e ambiente.",
      "Decorre puramente do débito cardíaco.",
      "Secundária representa 80% dos casos."
    ],
    correctAnswer: 1,
    explanation: "A hipertensão primária ou essencial resulta da complexa interação entre predisposição genética e fatores ambientais que alteram a regulação pressórica."
  },
  {
    id: "pr41",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "É um indicador utilizado na avaliação da eficiência de um sistema de vigilância epidemiológica:",
    options: ["flexibilidade", "mobilidade", "vulnerabilidade", "transcendência"],
    correctAnswer: 0,
    explanation: "A eficiência de um sistema de vigilância é medida por atributos técnicos como flexibilidade (capacidade de se adaptar a mudanças), oportunidade, representatividade e simplicidade. Os demais termos referem-se a características das doenças (transcendência, vulnerabilidade)."
  },
  {
    id: "pr42",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pode-se afirmar, sobre os modelos de atenção à saúde, que:",
    options: [
      "a vigilância da saúde prevê le desenvolvimento de ações voltadas para o controle de causas, riscos e danos relacionados à saúde das populações",
      "o modelo sanitarista preconiza o atendimento à demanda espontânea por assistência à saúde, baseando-se em procedimentos e serviços especializados",
      "o movimento da promoção da saúde caracteriza-se pela ênfase na organização dos serviços em em torno de programas especiais dirigidos ao controle de agravos e riscos específicos",
      "o modelo médico privatista é organizado em torno da resolução de prioridades por meio da programação de ações de saúde definidas a partir de critérios epidemiológicos"
    ],
    correctAnswer: 0,
    explanation: "O modelo de Vigilância da Saúde propõe a superação da dicotomia entre ações preventivas e curativas, focando no controle das causas e riscos que afetam a coletividade."
  },
  {
    id: "pr43",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Em um estudo de coorte, após dez anos de seguimento, a incidência de doença coronariana entre fumantes e não fumantes foi igual a, respectivamente, 5 casos por 1.000 pessoas/ano e 1 caso por 1.000 pessoas/ano. Por meio de um inquérito, estimou-se em 50% a prevalência del tabagismo na população total. Pode-se afirmar que:",
    options: [
      "50% dos casos de doença coronariana na população total são atribuíveis ao tabagismo",
      "80% dos casos de doença coronariana entre os fumantes são atribuíveis ao tabagismo",
      "a incidência de doença coronariana entre os fumantes, atribuível ao tabagismo, é de 2,5/1.000",
      "a incidência de doença coronariana na população total, atribuível ao tabagismo, é de 0,5/1.000"
    ],
    correctAnswer: 1,
    explanation: "O Risco Atribuível Proporcional no grupo exposto é calculado por (Ie−Io)/Ie. No caso: (5−1)/5=4/5=80%. Isso significa que 80% dos casos entre os fumantes poderiam ser evitados se o tabagismo fosse eliminado."
  },
  {
    id: "pr44",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pode-se afirmar que a redução da expectativa de vida de 4,5 anos da população brasileira, entre 2019 e 2021, como efeito da pandemia de Covid-19 é explicada pelo(a):",
    options: ["aumento da mortalidade", "redução da fecundidade", "aumento da razão de dependência", "redução do índice de envelhecimento"],
    correctAnswer: 0,
    explanation: "A expectativa de vida ao nascer é um indicador demográfico diretamente influenciado pelas taxas de mortalidade em todas as idades. O aumento expressivo de mortes prematuras e de idosos durante a pandemia reduziu a média de anos que se espera que a população viva."
  },
  {
    id: "pr45",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Profissional de saúde não vacinado para hepatite B sofre acidente com material biológico positivo para HBV. Pode-se afirmar que, dentre as ações realizadas, está a aplicação da imunoglobulina humana anti-hepatite B preferencialmente nas primeiras:",
    options: ["48 horas e, no máximo, até dez dias", "48 horas e, no máximo, até sete dias", "24 horas e, no máximo, até dez dias", "24 horas e, no máximo, até sete dias depois do acidente"],
    correctAnswer: 3,
    explanation: "Em exposições ao vírus da hepatite B (HBV), a profilaxia pós-exposição para não vacinados ou não respondedores deve incluir a imunoglobulina (IGHAHB) o mais rápido possível, preferencialmente nas primeiras 24 horas, com limite de até 7 dias."
  },
  {
    id: "pr46",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pode-se afirmar, sobre o Sistema Único de Saúde (SUS), que:",
    options: [
      "segundo o princípio da integralidade, as ações de promoção devem ser dissociadas da assistência hospitalar",
      "os serviços prestados no âmbito hospitalar devem ser geridos pelo governo federal devido à sua complexidade",
      "inclui, de forma complementar, uma ampla rede de serviços privados que são remunerados com recursos tributários destinados à saúde",
      "as atividades dirigidas às pessoas, coletivamente, voltadas para promoção da saúde são atributos exclusivos dos municípios"
    ],
    correctAnswer: 2,
    explanation: "A Constituição e a Lei 8.080/90 permitem que a iniciativa privada participe do SUS de forma complementar (preferencialmente entidades filantrópicas), sendo remunerada pela tabela SUS com recursos do orçamento público."
  },
  {
    id: "pr47",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pode-se afirmar, em relação às Políticas Públicas de Saúde para os Povos Indígenas, que:",
    options: [
      "os distritos sanitários especiais indígenas (DSEI) são estruturas fora do SUS",
      "devem ser planejadas intervenções que contemplem a emergência das causas externas e doenças crônicas não transmissíveis, como obesidade, HAS e DM",
      "o direito à saúde é garantido pelo órgão tutor (Funai) por meio del modelo de equipe volante",
      "a baixa rotatividade dos profissionais garante os bons resultados da política"
    ],
    correctAnswer: 1,
    explanation: "O perfil epidemiológico indígena atual mostra uma transição nutricional e epidemiológica, exigindo que o Subsistema de Saúde Indígena (dentro do SUS) lide tanto com doenças infectocontagiosas quanto com o aumento de doenças crônicas e violências."
  },
  {
    id: "pr48",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Em 2005, a razão de mortalidade materna (RMM) para o Nordeste foi de 66,9 contra 40,7 no Sudeste. Pode-se afirmar, para planejamento de políticas, que:",
    options: [
      "as desigualdades regionais mostram as iniquidades do acesso e as diferenças de qualidade da assistência à saúde no país",
      "este indicador tem importância restrita, pois a minoria das causas de mortes maternas no Brasil pode ser evitada",
      "o fato da ilegalidade do aborto não altera a RMM, pois óbitos por aborto não são computados",
      "não há diferença relevante na RMM relacionada à raça ou escolaridade"
    ],
    correctAnswer: 0,
    explanation: "A Razão de Mortalidade Materna é um dos principais indicadores de desenvolvimento socioeconômico e qualidade da rede de saúde. As disparidades regionais refletem diretamente as iniquidades no acesso ao pré-natal e parto seguro."
  },
  {
    id: "pr49",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pode-se afirmar, sobre le manejo do cuidado em saúde mental na Atenção Básica, que:",
    options: [
      "sofrimento psíquico e doença mental são sinônimos",
      "é fundamental aprender a se colocar disponível como ouvinte e cuidador diante de pessoas com algum tipo de sofrimento psíquico",
      "apenas o médico deve realizar intervenções neste contexto",
      "a cura definitiva dos sintomas deve ser o único objetivo do plano de cuidados"
    ],
    correctAnswer: 1,
    explanation: "A Atenção Primária deve acolher o sofrimento psíquico por meio da escuta qualificada e do vínculo, não se restringindo ao diagnóstico de doenças mentais graves. O cuidado deve ser multiprofissional."
  },
  {
    id: "pr50",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "O envelhecimento populacional é um fenômeno que gera grande impacto. Sobre esse fenômeno epidemiológico, pode-se afirmar que:",
    options: [
      "o segmento populacional com 80 anos ou mais vem crescendo mais lentamente que o de 65 a 80 anos",
      "as projeções indicam uma redução progressiva no número de idosos que buscam atendimento",
      "a feminização da velhice é uma marca do envelhecimento, pois as mulheres vivem mais que os homens",
      "a prevalência de multimorbidades é maior entre os idosos mais jovens"
    ],
    correctAnswer: 2,
    explanation: "A feminização da velhice decorre da maior sobrevida feminina, relacionada a menor exposição a riscos e maior cuidado com a saúde em comparação aos homens."
  },
  {
    id: "pr51",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pode-se afirmar, sobre as práticas de vigilância em saúde, que:",
    options: [
      "a vigilância sanitária engloba a definição de caso suspeito de agravos de notificação",
      "as normas sanitárias constituem medidas de prevenção secundária",
      "a detecção oportuna dos casos de dengue para reduzir letalidade é prevenção primária",
      "a vigilância sanitária tem a atribuição de avaliar produtos e procedimentos que possam causar dano à saúde e ao meio ambiente"
    ],
    correctAnswer: 3,
    explanation: "A Vigilância Sanitária atua no controle de bens de consumo, prestação de serviços e riscos ambientais, visando eliminar ou prevenir riscos à saúde."
  },
  {
    id: "pr52",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "Um município identificou um aumento de casos de dengue em uma determinada área. A primeira ação a ser realizada pela equipe de vigilância epidemiológica local é:",
    options: [
      "notificar autoridades federais sobre o surto.",
      "orientar a população para medidas de controle do mosquito.",
      "encaminhar todos os casos para internação.",
      "realizar uma investigação epidemiológica para entender a extensão do problema.",
      "vacinar a população contra a dengue."
    ],
    correctAnswer: 3,
    explanation: "Diante de um aumento súbito de casos (surto), o primeiro passo técnico da vigilância é a investigação epidemiológica para confirmar o surto, identificar a fonte e delimitar a área afetada."
  },
  {
    id: "pr53",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "Um artigo concluiu que um medicamento reduziu o tempo de internação. A amostra, porém, é pequena e não randomizada. A principal limitação é:",
    options: [
      "ausência de um grupo de controle.",
      "falta de representatividade da amostra.",
      "incapacidade de generalizar os resultados.",
      "uso de uma medida de desfecho subjetiva.",
      "custo elevado do medicamento."
    ],
    correctAnswer: 2,
    explanation: "Amostras pequenas e sem randomização comprometem a validade externa, o que impede que os resultados sejam generalizados para a população geral com segurança estatística."
  },
  {
    id: "pr54",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "Um paciente adolescente pediu ao médico que não informasse seus pais sobre um problema de saúde. Segundo o Código de Ética Médica, o médico deve respeitar o pedido quando:",
    options: [
      "o paciente tem 16 anos ou mais.",
      "o problema não representa risco grave à saúde do adolescente ou de terceiros.",
      "o adolescente assina um termo de responsabilidade.",
      "o médico julga que os pais não estão preparados emocionalmente.",
      "o paciente pedir, independentemente do contexto."
    ],
    correctAnswer: 1,
    explanation: "O sigilo médico com adolescentes é garantido desde que eles tenham capacidade de discernimento e a omissão não gere dano ou risco grave para o paciente ou para a coletividade."
  },
  {
    id: "pr55",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "Em um surto de sarampo, a prioridade para a contenção da transmissão na área afetada é:",
    options: [
      "ampliar a vacinação para a faixa etária de 6 a 12 meses (dose zero) na área de surto.",
      "monitorar os casos notificados sem intervenções adicionais.",
      "iniciar vacinação apenas após confirmação laboratorial de todos os casos.",
      "administrar antivirais a todos os casos suspeitos.",
      "isolar apenas sintomáticos e liberar contatos."
    ],
    correctAnswer: 0,
    explanation: "No bloqueio vacinal em surtos de sarampo, recomenda-se a aplicação da 'dose zero' em crianças de 6 a 11 meses para interromper a cadeia de transmissão rapidamente."
  },
  {
    id: "pr56",
    institution: "UNESP",
    year: 2025,
    specialty: "Preventiva",
    text: "Segundo a Resolução CNS 588/2018, as finalidades da Lista de Doenças Relacionadas ao Trabalho (LDRT) incluem:",
    options: [
      "orientar ações de responsabilização dos trabalhadores adoecidos.",
      "adotar procedimentos medicamentosos e preservar o empregador.",
      "adotar procedimentos de diagnóstico, elaborar projetos terapêuticos e orientar ações.",
      "facilitar o estudo da relação nexo-causal para fins puramente estatísticos."
    ],
    correctAnswer: 3,
    explanation: "A LDRT serve para qualificar a atenção integral e facilitar o estudo da relação entre o adoecimento e o trabalho, subsidiando o diagnóstico e a vigilância (conforme alteração oficial de gabarito)."
  },
  {
    id: "pr57",
    institution: "UNESP",
    year: 2025,
    specialty: "Preventiva",
    text: "Homem, 50 anos, técnico, apresenta fadiga profunda, falta de prazer, dificuldade em decidir e desvalorização pessoal após ameaças de demissão. O diagnóstico mais provável é síndrome:",
    options: [
      "de estresse pós-traumático e transtorno depressivo.",
      "da fadiga crônica e transtorno depressivo.",
      "do esgotamento profissional (Burnout) e transtorno depressivo.",
      "de pânico e transtorno depressivo."
    ],
    correctAnswer: 2,
    explanation: "O quadro descreve a Síndrome de Burnout (esgotamento profissional), caracterizada por exaustão emocional e redução da realização profissional, frequentemente associada a depressão."
  },
  {
    id: "pr58",
    institution: "UNESP",
    year: 2025,
    specialty: "Preventiva",
    text: "Um estudo incluiu 200 participantes, 100 com câncer bucal e 100 sem a doença, para avaliar a associação retrospectiva com periodontite. O desenho de estudo é:",
    options: ["ensaio clínico randomizado.", "estudo de coorte prospectivo.", "estudo de caso-controle.", "estudo transversal."],
    correctAnswer: 2,
    explanation: "Partir do efeito (doentes vs não doentes) para investigar retrospectivamente a causa/exposição define o estudo de caso-controle."
  },
  {
    id: "pr59",
    institution: "UNESP",
    year: 2025,
    specialty: "Preventiva",
    text: "Um estudo mostrou que países com maior consumo de frutas têm menor incidência de doenças cardiovasculares. Concluiu-se que indivíduos que comem mais frutas têm menos risco. Esta conclusão pode estar incorreta por:",
    options: ["viés de seleção.", "falácia ecológica.", "confusão residual.", "erro de aferição."],
    correctAnswer: 1,
    explanation: "A falácia ecológica ocorre quando se atribui a indivíduos uma associação observada em nível de grupo/população, sem que necessariamente essa relação se sustente no nível individual."
  },
  {
    id: "pr60",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Preventiva",
    text: "De acordo com o Código de Ética Médica, é vedado ao médico:",
    options: [
      "aceitar a realização de junta médica solicitada pelo paciente.",
      "participar do diagnóstico da morte do doador quando pertencer à equipe de transplante.",
      "deixar de revelar sigilo profissional relacionado a criança que corre risco de dano.",
      "guardar sigilo profissional na cobrança de honorários por meio judicial.",
      "elaborar prontuário legível para cada paciente."
    ],
    correctAnswer: 1,
    explanation: "O Art. 43 do CEM veda que o médico que diagnostica a morte encefálica faça parte da equipe de transplante, garantindo a isenção no processo."
  },
  {
    id: "pr61",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pode-se afirmar, no contexto da avaliação da qualidade das evidências em saúde pelo sistema Grading of Recommendations Assessment, Development and Evaluation (GRADE), que:",
    options: [
      "a aleatorização assegura a superioridade da evidência gerada pelos ensaios clínicos em relação aos estudos observacionais, independentemente da presença de fatores que possam aumentar a confiança.",
      "a qualidade da evidência é reduzida em situações nas quais os efeitos das intervenções são comparados indiretamente, por meio de uma terceira alternativa ou controle.",
      "a opção pela avaliação da qualidade dos estudos individualmente ou do conjunto não interfere na avaliação do risco de viés em uma revisão sistemática.",
      "um valor elevado para o teste de inconsistência (I²) é critério suficiente para indicar a necessidade de redução do nível de evidência."
    ],
    correctAnswer: 1,
    explanation: "No sistema GRADE, a evidência indireta (quando não há comparação direta entre as intervenções de interesse) é um dos fatores que levam ao rebaixamento da qualidade da evidência, pois diminui a certeza sobre a magnitude do efeito real."
  },
  {
    id: "pr62",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Gestante no fim do oitavo mês chega chocada ao Setor de Emergência com sangramento genital crescente há 10 dias. Foi diagnosticado descolamento prematuro de placenta (DPP). Faleceu em seguida à cesariana; o feto foi retirado já morto. Pode-se afirmar que as causas básicas do óbito materno e do óbito fetal foram:",
    options: [
      "hemorragia genital materna para o óbito materno e a anóxia intrauterina para o óbito fetal.",
      "hemorragia genital materna para o óbito materno e o fetal.",
      "descolamento prematuro de placenta para o óbito materno e o fetal.",
      "descolamento prematuro de placenta para o óbito materno e a anóxia intrauterina para o óbito fetal."
    ],
    correctAnswer: 2,
    explanation: "A causa básica é a doença ou lesão que iniciou a cadeia de eventos patológicos que conduziram à morte. Tanto para a mãe quanto para o feto, o evento primário que desencadeou o desfecho fatal foi o descolamento prematuro de placenta."
  },
  {
    id: "pr63",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "A utilização de múltiplos testes em paralelo na prática clínica busca o aprimoramento da acurácia diagnóstica. Comparativamente ao desempenho dos testes isolados, espera-se:",
    options: [
      "o aumento da sensibilidade e do valor preditivo negativo.",
      "a redução da sensibilidade e o aumento do valor preditivo negativo.",
      "o aumento da especificidade e do valor preditivo positivo.",
      "a redução da especificidade e o aumento do valor preditivo positivo."
    ],
    correctAnswer: 0,
    explanation: "A realização de testes em paralelo (considerar o diagnóstico positivo se QUALQUER teste for positivo) aumenta a sensibilidade do conjunto, o que, por consequência, aumenta a capacidade de excluir a doença (elevando o valor preditivo negativo)."
  },
  {
    id: "pr64",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "A situação onde há prazo para encerramento da investigação do caso notificado como doenças e agravos relacionados ao trabalho no Sistema de Informação de Agravos de Notificação (Sinan) é:",
    options: [
      "enfermeiro que se acidenta com agulha durante punção venosa.",
      "tosador de pet shop com dermatite de contato.",
      "marmorista com fibrose pulmonar.",
      "dentista com tendinite do manguito rotador à direita."
    ],
    correctAnswer: 0,
    explanation: "O acidente com material biológico é um agravo de notificação compulsória imediata que exige um acompanhamento rigoroso de soroconversão, possuindo protocolos específicos de encerramento e vigilância epidemiológica no Sinan."
  },
  {
    id: "pr65",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pneumoconioses são doenças pulmonares relacionadas à inalação de poeiras minerais. É uma atividade relacionada ao desenvolvimento de pneumoconiose não fibrogênica:",
    options: [
      "indústria aeroespacial",
      "siderurgia",
      "indústria de fibrocimento",
      "ceramista"
    ],
    correctAnswer: 1,
    explanation: "A siderose (poeira de ferro), comum na siderurgia, é tipicamente classificada como uma pneumoconiose não fibrogênica, pois as partículas de ferro tendem a se acumular sem causar a reação inflamatória cicatricial intensa observada na sílica ou asbesto."
  },
  {
    id: "pr66",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "A Vigilância Epidemiológica em Saúde do Trabalhador (Vesat) é um componente da vigilância em saúde do trabalhador. Entre os seus objetivos está:",
    options: [
      "identificar e analisar as atividades produtivas de maior risco dentro do território.",
      "orientar medidas de prevenção e controle para impedir a ocorrência de novos casos.",
      "articular com outras vigilâncias no sentido de garantir maior eficiência das ações.",
      "realizar a inspeção sanitária em saúde do trabalhador para mapeamento dos riscos."
    ],
    correctAnswer: 1,
    explanation: "O objetivo central da Vigilância Epidemiológica (seja geral ou do trabalhador) é o conhecimento dos determinantes para orientar medidas de controle e prevenção de novos casos de doenças ou agravos."
  },
  {
    id: "pr67",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "A respeito da vigilância do óbito fetal, infantil e materno, analise: I) Na morte perinatal, o fator materno ou fetal conhecido deve ser a causa básica. II) Morte Materna Tardia não é de investigação obrigatória. III) Recomenda-se priorizar investigação de óbitos fetais/infantis com peso adequado (≥ 2.500g). Está correta:",
    options: ["I", "II", "II e III", "I e III"],
    correctAnswer: 3,
    explanation: "A afirmativa I está correta conforme as regras de codificação. A III está correta porque óbitos de bebês com peso adequado são considerados 'eventos sentinela', indicando que a morte era evitável. A II está incorreta: mortes maternas devem ser investigadas."
  },
  {
    id: "pr68",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "A respeito da farmacovigilância, analise: I) Eventos off label não são sujeitos a notificação. II) O evento adverso refere-se a ocorrência desfavorável sem que necessariamente exista relação causal. III) Medidas regulatórias (alertas/suspensão) podem ser adotadas após confirmação da relação causal. Estão corretas:",
    options: ["II e III", "I", "II", "I e III"],
    correctAnswer: 0,
    explanation: "A definição de evento adverso (II) independe da causalidade inicial. Uma vez confirmada a relação entre o dano e o fármaco, a autoridade sanitária pode emitir alertas ou suspender lotes (III). O uso off label que gera dano deve ser notificado."
  },
  {
    id: "pr69",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Na organização de sistemas de saúde, analise as definições: I) Acesso – Grau de facilidade com que as pessoas obtêm cuidados. II) Utilização – Todo contato direto ou indireto que envolva procedimentos. III) Cobertura – Proporção da população que recebeu ou tem direito a receber um serviço. Estão corretas:",
    options: ["I", "II", "I e III", "II e III"],
    correctAnswer: 2,
    explanation: "O Acesso (I) diz respeito à facilidade de entrada. A Cobertura (III) é um indicador de abrangência populacional. A definição II está tecnicamente incompleta na fonte, pois a utilização é um fenômeno mais complexo que o simples contato formal."
  },
  {
    id: "pr70",
    institution: "UFRJ",
    year: 2025,
    specialty: "Preventiva",
    text: "Pode-se afirmar sobre os desafios para implantação do SUS e o processo de descentralização, que este:",
    options: [
      "está relacionado à transferência da gestão sem responsabilidade sobre recursos financeiros.",
      "se revelou um equívoco medida prejudicial por envolver jogos de poder entre governos.",
      "envolve a transferência da gestão de serviços, poder decisório e recursos financeiros, principalmente para os municípios.",
      "está relacionado à transferência da gestão principalmente para os estados, coordenados pela sociedade civil."
    ],
    correctAnswer: 2,
    explanation: "A Descentralização é um princípio organizativo do SUS que redistribui poder e responsabilidade para os entes locais (municipalização), garantindo que o gestor mais próximo da população tenha recursos para gerir a saúde."
  },
  {
    id: "pr71",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "Um estudo mostrou que uma nova vacina reduziu a incidência de uma doença em 80% em uma população. Este é um exemplo de:",
    options: [
      "risco relativo.",
      "incidência cumulativa.",
      "redução de risco relativo.",
      "redução de risco absoluto.",
      "prevalência."
    ],
    correctAnswer: 2,
    explanation: "Quando se diz que uma intervenção reduziu a ocorrência em uma porcentagem (ex: 80% menos casos que o grupo controle), estamos medindo a Redução do Risco Relativo (RRR), que indica a eficácia preventiva em termos proporcionais."
  },
  {
    id: "pr72",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "Uma paciente de 34 anos é acompanhada na UBS por hipertensão. A equipe orientou mudanças de estilo de vida e agendou retornos. Esse acompanhamento regular reflete qual papel da APS?",
    options: [
      "acompanhar a paciente ao longo do tempo, coordenando seu cuidado e monitorando sua condição.",
      "enviar a paciente à emergência para resolver imediatamente o problema.",
      "solicitar uma série de exames de imagem para investigar todas as causas.",
      "limitar o atendimento às queixas atuais e aguardar retorno espontâneo.",
      "encaminhar ao especialista focal devido aos quadros anteriores."
    ],
    correctAnswer: 0,
    explanation: "O papel central da APS descrito é a longitudinalidade, que pressupõe o acompanhamento do indivíduo ao longo do tempo, permitindo o manejo crônico de condições como a hipertensão."
  },
  {
    id: "pr73",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "Em um bairro com altos índices de doenças respiratórias, a equipe da UBS realiza oficinas sobre controle de umidade e ventilação nas casas. Esta estratégia é de:",
    options: [
      "distribuição de medicamentos.",
      "promoção da saúde.",
      "consulta especializada.",
      "assistência prioritária.",
      "detecção precoce (screening)."
    ],
    correctAnswer: 1,
    explanation: "Ações que visam educar a população sobre seus determinantes ambientais para evitar o adoecimento são estratégias de promoção da saúde, focadas em capacitá-los para o autocuidado e melhoria do ambiente."
  },
  {
    id: "pr74",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "Um médico descobre que seu paciente tem uma doença infectocontagiosa grave e este se recusa a avisar a parceira. Segundo o Código de Ética Médica, o médico deve:",
    options: [
      "manter o sigilo absoluto.",
      "notificar autoridades de saúde pública, devido ao risco de transmissão.",
      "pedir ao paciente para assinar um termo de isenção.",
      "informar a pessoa em risco mesmo sem o consentimento.",
      "encaminhar a outro médico."
    ],
    correctAnswer: 1,
    explanation: "O dever de notificação compulsória às autoridades de saúde sobrepõe-se ao sigilo médico em casos de doenças infectocontagiosas que coloquem a coletividade em risco, conforme previsto em lei e no CEM."
  },
  {
    id: "pr75",
    institution: "SUS-SP",
    year: 2025,
    specialty: "Preventiva",
    text: "A secretaria de saúde trabalha com a secretaria de educação para promover educação nutricional nas escolas. Isso exemplifica:",
    options: [
      "campanha interna.",
      "feira de saúde.",
      "intersetorialidade.",
      "palestra de prevenção.",
      "adoção de protocolos."
    ],
    correctAnswer: 2,
    explanation: "A intersetorialidade ocorre quando diferentes setores da administração pública (Saúde e Educação) unem esforços e recursos para resolver problemas complexos que extrapolam a competência de apenas uma pasta."
  },
  {
    id: "pr76",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Preventiva",
    text: "Sobre o Método Clínico Centrado na Pessoa (MCCP), assinale a correta:",
    options: [
      "A linguagem não verbal não deve ser utilizada para evitar subjetividade.",
      "O médico deve escolher a medicação sozinho, pois o paciente não tem técnica.",
      "Compreender o contexto biopsicossocial é vital, pois a enfermidade sofre influência dos determinantes sociais.",
      "Os passos 'ser realista' e 'prevenção' são os componentes 5 e 6 do método atual (2017).",
      "Não deve ser usado fora da atenção primária."
    ],
    correctAnswer: 2,
    explanation: "O MCCP busca entender a experiência da doença para o indivíduo. Compreender o contexto biopsicossocial é fundamental para identificar como os determinantes sociais impactam a saúde e a adesão."
  },
  {
    id: "pr77",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Preventiva",
    text: "A variação na incidência de uma doença, cujo valor máximo extrapola o canal endêmico, é chamada de:",
    options: ["epidêmica.", "endêmica.", "sindêmica.", "pandêmica.", "sazonal."],
    correctAnswer: 0,
    explanation: "Quando o número de casos de uma doença ultrapassa o limite superior esperado (teto do canal endêmico ou diagrama de controle) para aquela região e época, caracteriza-se uma epidemia."
  },
  {
    id: "pr78",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Preventiva",
    text: "Segundo a Lei 8.080/90, é um objetivo do SUS:",
    options: [
      "Assistência toxicológica e sistema nacional de antídotos.",
      "Identificação e divulgação dos fatores condicionantes e determinantes da saúde.",
      "Execução de ações de vigilância sanitária.",
      "Saneamento básico de pequenas comunidades.",
      "Ordenação da formação de recursos humanos."
    ],
    correctAnswer: 1,
    explanation: "A Lei 8.080/90, no Art. 5º, define como um dos objetivos do SUS a identificação de determinantes sociais. Atenção: execução de vigilância (C) e formação de RH (E) são campos de atuação (Art. 6º)."
  },
  {
    id: "pr79",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Preventiva",
    text: "No médico com atitude paternalista, o princípio bioético prejudicado e o tratado com excesso de zelo são, respectivamente:",
    options: [
      "Beneficência e autonomia.",
      "Não maleficência e beneficência.",
      "Autonomia e beneficência.",
      "Justiça e autonomia.",
      "Equidade e justiça."
    ],
    correctAnswer: 2,
    explanation: "No paternalismo, o médico julga saber o que é melhor para o paciente (excesso de Beneficência) e toma decisões por ele, ferindo o direito de autogoverno do doente (prejuízo da Autonomia)."
  },
  {
    id: "pr80",
    institution: "Estratégia MED",
    year: 2025,
    specialty: "Preventiva",
    text: "Atributo essencial da APS que se refere à capacidade do sistema em absorver quem procura atendimento, servindo como porta de entrada:",
    options: [
      "Longitudinalidade.",
      "Acesso (ou primeiro contato).",
      "Coordenação do cuidado.",
      "Integralidade.",
      "Orientação comunitária."
    ],
    correctAnswer: 1,
    explanation: "O Acesso é o atributo que garante que a APS seja o primeiro contato do usuário com o sistema de saúde, devendo ser geograficamente e organizacionalmente acessível."
  }
  {
  id: "pr81",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Observe o encaminhamento realizado por um médico de família. “À cardiologia, Encaminho o Sr. J. L. S., de 56 anos, com diagnóstico de cardiopatia isquêmica, que sofreu um infarto agudo do miocárdio há 3 meses. Tem orientação para o uso de antiagregantes plaquetários, mas tem história de úlcera péptica e teve reação alérgica ao clopidogrel e à ticlopidina. Desta forma, solicito orientação quanto à conduta preventiva.” Ao ser assistido pelo cardiologista, o paciente será atendido em qual nível de atenção e receberá que tipo de prevenção, respectivamente?",
  options: [
    "Primário; secundário.",
    "Secundário; secundário.",
    "Terciário; terciário.",
    "Quaternário; terciário."
  ],
  correctAnswer: 1,
  explanation: "O atendimento ambulatorial especializado (cardiologia) caracteriza nível secundário de atenção. Como o objetivo é prevenir recorrência/complicações de um agravo já instalado (IAM há 3 meses), trata-se de prevenção secundária."
},
{
  id: "pr82",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Homem de 52 anos, branco, solteiro, comparece à consulta agendada na Unidade Básica de Saúde (UBS) desejando realizar revisão clínica e exames laboratoriais. Desde os 35 anos não faz acompanhamento de saúde. Relata história familiar de diabetes e hipertensão, e a mãe faleceu com câncer de pulmão. Sem história familiar de câncer de próstata. Fuma cerca de 2 maços por dia há 21 anos. Exame físico: pressão arterial de 120 x 80 mmHg, índice de massa corporal de 23 kg/m², sem outras alterações. Considerando as recomendações de rastreamento para esse paciente, o médico de família e comunidade deve:",
  options: [
    "solicitar exames de colesterol total e frações, hemograma, glicemia de jejum, creatinina, PSA, radiografia de tórax, colonoscopia, realizar toque retal; orientar sobre a prática de atividade física regular.",
    "solicitar exames de colesterol total, glicemia de jejum, pesquisa de sangue oculto nas fezes, PSA, ofertar anti-HIV e HBsAg, realizar toque retal; orientar sobre participação no grupo na UBS para abandono do tabagismo.",
    "abordar mudanças no estilo de vida e cessação do tabagismo; acompanhar, em consultas longitudinais, as futuras possibilidades de exames complementares, quando o paciente atingir faixa etária para investigações adicionais.",
    "solicitar exames de colesterol total, HDL e triglicerídeos, glicemia de jejum, pesquisa de sangue oculto nas fezes, ofertar testes rápidos para HIV, sífilis e hepatites B e C; realizar abordagem sobre possibilidade de cessação do tabagismo."
  ],
  correctAnswer: 3,
  explanation: "Aos 52 anos, recomenda-se rastrear risco cardiovascular (perfil lipídico e glicemia) e câncer colorretal (sangue oculto nas fezes entre 50–75 anos). Na APS, é indicado ofertar testagem para ISTs conforme protocolos e fazer intervenção prioritária para cessação do tabagismo."
},
{
  id: "pr83",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Mulher de 32 anos, trabalhadora rural, diarista no plantio de morango, procura Unidade Básica de Saúde (UBS) com queixas de tonturas, dores de cabeça, cansaço, náuseas e falta de ar. Relata que há 2 semanas, após uma pulverização de agrotóxicos, começou a apresentar os sintomas, e que sua colega apresenta queixas similares. A médica suspeita de intoxicação aguda por agrotóxicos. Nessa situação, qual é a conduta adequada a ser adotada na assistência?",
  options: [
    "Encaminhar como caso suspeito ao centro de referência em saúde do trabalhador estadual e formalizar denúncia ao Ministério Público do Trabalho.",
    "Estabelecer nexo causal entre os sintomas e os resultados de exames complementares, para confirmar diagnóstico de intoxicação por agrotóxicos, e notificar a Vigilância em Saúde municipal.",
    "Tratar os sintomas, solicitar exames complementares, notificar o caso no Sistema de Notificação de Agravos e Doenças (Sinan), conceder atestado médico e solicitar matriciamento à Vigilância em Saúde do Trabalhador.",
    "Informar não ser responsável pelo preenchimento da comunicação de acidente de trabalho (CAT), por ser atribuição exclusiva da medicina do trabalho."
  ],
  correctAnswer: 2,
  explanation: "Na suspeita de agravo relacionado ao trabalho, a APS deve prestar assistência clínica (tratamento e exames), realizar notificação compulsória no SINAN (intoxicação por agrotóxicos) e acionar/solicitar apoio (matriciamento) da Vigilância em Saúde do Trabalhador."
},
{
  id: "pr84",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Mulher travesti de 28 anos, profissional do sexo, comparece à UBS em demanda espontânea. Relata relações sexuais frequentes com uso inconsistente de preservativos. Há 2 dias teve uma relação sexual desprotegida com um cliente. Nunca utilizou medicamento para PrEP ou PEP. Considerando que a paciente está assintomática no momento, qual a melhor estratégia de prevenção?",
  options: [
    "Prescrever PrEP após resultado não reagente para HIV; indicar PEP após tratamento inicial e orientar rastreamento de ISTs a cada 3 meses.",
    "Oferecer teste rápido para HIV e sífilis; prescrever PrEP de início imediato; orientar sobre as vacinas disponíveis no SUS.",
    "Realizar testagem rápida para HIV e sífilis; prescrever PEP mediante resultado não reagente para HIV e programar início da PrEP após término da PEP.",
    "Prescrever PEP e PrEP de forma concomitante; solicitar sorologias para ISTs; agendar retorno."
  ],
  correctAnswer: 2,
  explanation: "Houve exposição de risco há 48 horas (janela até 72h), portanto indica-se PEP após testagem inicial (HIV não reagente). Como o risco é contínuo (profissional do sexo), programa-se transição para PrEP ao término dos 28 dias de PEP."
},
{
  id: "pr85",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Homem de 48 anos, auxiliar de pedreiro, procura UBS com queixa de dor lombar iniciada há 3 semanas, de instalação insidiosa, sem irradiação. Relata que a dor piora ao final do dia e melhora com repouso e paracetamol. Nega \"red flags\" (perda de peso, febre, traumas). Exame físico com dor à palpação paravertebral, sem alterações neurológicas. Qual o próximo passo na condução desse caso?",
  options: [
    "Solicitar ressonância magnética da coluna lombar e encaminhar para a ortopedia.",
    "Solicitar radiografia lombar, prescrever corticoide oral e agendar o retorno após 10 dias.",
    "Orientar repouso, fornecer atestado de 7 dias e otimizar a analgesia com antidepressivo tricíclico.",
    "Explicar a natureza benigna, orientar analgesia e atividade física leve, com reavaliação em 4 a 6 semanas."
  ],
  correctAnswer: 3,
  explanation: "Lombalgia mecânica subaguda sem sinais de alerta não exige imagem inicial. Conduta: educação (curso benigno), analgesia simples, manter atividade física leve e reavaliar em 4–6 semanas (evitar repouso absoluto e exames desnecessários)."
},
{
  id: "pr86",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Sobre a internação involuntária no Brasil, é correto afirmar que:",
  options: [
    "a internação involuntária é determinada, de acordo com a legislação, pela Justiça.",
    "é autorizada por médico devidamente registrado no Conselho Regional de Medicina.",
    "no prazo de 15 dias, a internação deve ser comunicada ao Ministério Público Federal.",
    "o término da internação involuntária ocorrerá por solicitação do Ministério Público Municipal."
  ],
  correctAnswer: 1,
  explanation: "Pela Lei 10.216/2001, a internação involuntária é autorizada por médico. A comunicação é ao Ministério Público Estadual em até 72 horas, e a alta decorre de avaliação clínica (não por determinação do MP)."
},
{
  id: "pr87",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Homem de 48 anos busca a UBS para reiniciar tratamento para tuberculose. Paciente interrompeu o acompanhamento há 2 meses (abandono). Foram solicitados TRM-TB, baciloscopia e radiografia. Qual a conduta adequada?",
  options: [
    "Se o TRM-TB for positivo, sem resistência à rifampicina, e a baciloscopia for negativa, reiniciar o esquema básico.",
    "Se o TRM-TB for negativo e a baciloscopia for positiva, reiniciar o esquema básico, desde que a resistência à rifampicina seja positiva.",
    "Se o TRM-TB for negativo e a baciloscopia for positiva, solicitar cultura de escarro com teste de sensibilidade e reiniciar o esquema básico enquanto se aguarda a cultura.",
    "Se o TRM-TB for positivo, com resistência à rifampicina, e a baciloscopia for positiva, solicitar cultura de escarro com teste de sensibilidade e reiniciar o esquema básico."
  ],
  correctAnswer: 2,
  explanation: "Em retratamento por abandono, resultados discordantes exigem cultura com teste de sensibilidade para investigar resistência. A conduta é iniciar o esquema básico enquanto aguarda a cultura, ajustando depois conforme sensibilidade."
},
{
  id: "pr88",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Uma instituição de saúde está pesquisando um novo teste de triagem para hanseníase, com sensibilidade de 92% e especificidade de 65%, aplicado em uma população com baixa prevalência da doença. Nesse contexto, é correto afirmar que:",
  options: [
    "quase todos os testes positivos indicarão verdadeiros casos de hanseníase.",
    "o número de falsos-positivos será elevado, devido à baixa especificidade do teste e à baixa prevalência da doença.",
    "o número de falsos-negativos será elevado, reduzindo a capacidade do teste em detectar casos reais.",
    "a elevada sensibilidade do teste o torna ideal para a confirmação do diagnóstico."
  ],
  correctAnswer: 1,
  explanation: "Em baixa prevalência, o VPP cai. Com especificidade de 65%, haverá muitos falsos-positivos, tornando grande parte dos positivos não verdadeiros casos."
},
{
  id: "pr89",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Mulher de 52 anos chega à UBS muito chorosa, relatando luto pela morte do filho ocorrida há 3 dias. Sonha com o ocorrido e sente dor intensa. Nega ideação suicida ou histórico psiquiátrico prévio. Qual a conduta adequada?",
  options: [
    "Prescrever inibidor de recaptação de serotonina para alívio dos sintomas.",
    "Encaminhar ao CAPs para seguimento intensivo com médico psiquiatra.",
    "Encaminhar para psicologia na atenção secundária para ofertar terapia psicanalítica breve.",
    "Acompanhar longitudinalmente para observação e ofertar apoio pela equipe da UBS."
  ],
  correctAnswer: 3,
  explanation: "Quadro compatível com luto agudo normal (3 dias). A APS deve acolher, oferecer suporte, orientar rede de apoio e acompanhar longitudinalmente, evitando medicalização/encaminhamentos intensivos sem critérios."
},
{
  id: "pr90",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Médica de 32 anos trabalhará no distrito indígena Yanomami (região endêmica para malária). Qual quimioprofilaxia está indicada?",
  options: [
    "Artesunato.",
    "Doxiciclina.",
    "Primaquina.",
    "Cloroquina."
  ],
  correctAnswer: null,
  explanation: "Questão excluída. De acordo com o gabarito definitivo, esta questão foi excluída do cálculo dos resultados por desajuste ao modelo estatístico."
},
{
  id: "pr91",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Paciente de 27 anos, em regime fechado em penitenciária, queixa-se de tosse há 2 semanas. Considerando a situação na qual se encontra esse paciente, o médico de família e comunidade deve:",
  options: [
    "encaminhar para internação clínica, objetivando rapidez no diagnóstico.",
    "solicitar radiografia de tórax, pesquisa laboratorial de Mycobacterium tuberculosis e garantir o tratamento em caso de positividade.",
    "solicitar internação social, a fim de garantir tratamento supervisionado por 6 meses.",
    "aguardar evolução, com uso de sintomáticos; caso a tosse persista por mais de 3 semanas, investigar."
  ],
  correctAnswer: 1,
  explanation: "População privada de liberdade é de alto risco para TB; define-se sintomático respiratório com qualquer duração de tosse. Deve-se investigar imediatamente (TRM-TB/baciloscopia e RX) e garantir tratamento se confirmado."
},
{
  id: "pr92",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Ao visitar um idoso acamado de 80 anos, a médica verifica que ele não recebeu vacinas por receio da cuidadora sobre efeitos colaterais. Assinale a alternativa com vacinas do calendário nacional para o idoso e a forma de abordagem:",
  options: [
    "Pneumocócica 23-valente, dT (difteria e tétano), contra influenza e covid-19 e contra hepatite B. Agendar nova visita com mais familiares para dialogar.",
    "Contra influenza e covid-19; dT; contra hepatite B; contra herpes-zoster. Fazer denúncia ao Conselho do Idoso.",
    "Pneumocócica 10-valente; dT; contra influenza e covid-19; contra hepatite B. Solicitar assinatura de termo de responsabilidade.",
    "Pneumocócica 10-valente; influenza; covid-19; herpes-zoster e dT. Respeitar a autonomia da filha."
  ],
  correctAnswer: 0,
  explanation: "Calendário do idoso inclui influenza, covid-19, dT e hepatite B. Pneumocócica 23V é indicada para idosos acamados/institucionalizados. A abordagem deve ser educativa e dialógica, envolvendo família/cuidadores para reduzir hesitação vacinal."
},
{
  id: "pr93",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "As ações voltadas para o controle do mosquito Aedes sp incluem o manejo integrado de vetores, que envolve atividades executadas pela equipe de vigilância em um processo cíclico, tais como:",
  options: [
    "levantamento do índice larvário e notificação de vetores infectados.",
    "treinamento da equipe, uso intensivo de inseticidas e mutirões.",
    "vigilância virológica e notificação semanal de casos suspeitos.",
    "análise situacional com base em informações, desenho das operações de planificação, implementação, monitoramento e avaliação."
  ],
  correctAnswer: 3,
  explanation: "Manejo integrado é ciclo de gestão: análise situacional, planejamento, implementação e monitoramento/avaliação contínuos, ajustando estratégias conforme efetividade e contexto."
},
{
  id: "pr94",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Médica de família preencherá a declaração de óbito (DO) de um paciente hipertenso (30 anos) com histórico de AVE (5 anos). Há 10 dias teve gripe e há 1 dia agravamento respiratório. A DO deverá ser preenchida:",
  options: [
    "pelo IML; Parte I: a) Insuficiência respiratória; b) Gripe; c) HAS. Parte II: AVE.",
    "pela médica; Parte I: a) Insuficiência respiratória aguda grave (horas); b) Pneumonia (1 dia); c) Síndrome gripal (10 dias). Parte II: a) AVE (5 anos); b) HAS (30 anos).",
    "pelo SAMU; Parte I: a) Síndrome gripal; b) Pneumonia; c) Insuficiência respiratória.",
    "pelo SVO; Parte I: a) Insuficiência respiratória; b) AVE; c) HAS."
  ],
  correctAnswer: 1,
  explanation: "Sendo morte natural assistida, a médica assistente preenche a DO. Na Parte I, registra-se a cadeia causal (imediata → básica) com tempo aproximado; na Parte II, condições contribuintes (AVE e HAS) que não fazem parte da sequência direta."
},
{
  id: "pr95",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Uma equipe identificou complicações de diabetes em sua população e decidiu elaborar um projeto de intervenção com ênfase em orientação nutricional e atividade física. Qual é o desenho de pesquisa para avaliação do impacto desse projeto?",
  options: [
    "Estudo de caso-controle aninhado.",
    "Ensaio clínico não randomizado.",
    "Estudo de coorte retrospectivo.",
    "Ensaio clínico randomizado."
  ],
  correctAnswer: 1,
  explanation: "Projeto de intervenção aplicado em serviço/comunidade, sem alocação aleatória formal, caracteriza ensaio clínico não randomizado (quase-experimento) para avaliar impacto antes/depois ou com comparações não aleatórias."
},
{
  id: "pr96",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Médico investigará o padrão de dependência de álcool de um paciente de 45 anos conforme o DSM-5. O médico deve investigar sobre:",
  options: [
    "a intolerância cruzada entre outras substâncias.",
    "a aceitação e a adesão à proposta de abstinência.",
    "o tempo que é gasto para obter a substância ou recuperar-se de seus efeitos.",
    "o tipo e a classe de substância que o paciente usa."
  ],
  correctAnswer: 2,
  explanation: "Critérios do DSM-5 incluem gastar muito tempo para obter, usar ou se recuperar do álcool/substância, sendo marcador central do transtorno por uso de substâncias."
},
{
  id: "pr97",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Em uma unidade prisional superlotada, houve aumento de queixas de prurido intenso e lesões cutâneas. As ações prioritárias no manejo adequado dessa situação são:",
  options: [
    "solicitar o isolamento imediato dos sintomáticos e tratamento individual.",
    "implementar bloqueio coletivo com tratamento simultâneo, notificar o surto à vigilância e planejar medidas educativas/estruturais.",
    "preferir o tratamento tópico dos casos diagnosticados e restringir medicação aos confirmados.",
    "discutir a transferência dos casos graves e focar em folhetos informativos."
  ],
  correctAnswer: 1,
  explanation: "Em surtos em ambientes fechados (escabiose é hipótese típica), a prioridade é bloqueio coletivo com tratamento simultâneo de casos/contatos, notificação do surto e medidas educativas/estruturais para interromper transmissão."
},
{
  id: "pr98",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Médica em atendimento a comunidades ribeirinhas e indígenas observa que uma mulher ribeirinha evita contato visual e um indígena insiste na presença de um pajé da comunidade. A abordagem adequada é:",
  options: [
    "investir na padronização de rotinas clínicas e comunicação técnica.",
    "promover espaços formativos para a equipe assistencial, reconhecendo saberes e práticas das populações atendidas.",
    "reforçar a autonomia profissional da médica e condutas baseadas em evidências.",
    "estabelecer rotinas padronizadas uniformes de atendimento."
  ],
  correctAnswer: 1,
  explanation: "Competência cultural exige reconhecer práticas/saberes locais (ex.: presença do pajé), qualificar a equipe e adaptar comunicação e cuidado para garantir vínculo, respeito e efetividade."
},
{
  id: "pr99",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Paciente de 21 anos se reconhece como homem trans e busca informações sobre transição de gênero na UBS. Não apresenta sofrimento psíquico ou sintomas psiquiátricos. Qual a conduta mais adequada?",
  options: [
    "Solicitar avaliação psiquiátrica para diagnóstico de disforia de gênero.",
    "Iniciar terapia hormonal na UBS imediatamente.",
    "Encaminhar para serviço especializado e informar que o seguimento é apenas lá.",
    "Esclarecer que tal identidade de gênero não é transtorno mental e oferecer acompanhamento contínuo na UBS."
  ],
  correctAnswer: 3,
  explanation: "O cuidado deve seguir a despatologização: acolher, informar que identidade trans não é transtorno mental e manter acompanhamento contínuo na APS para cuidados gerais e prevenção, com encaminhamentos quando indicados."
},
{
  id: "pr100",
  institution: "ENAMED",
  year: 2025,
  specialty: "Preventiva",
  text: "Agente de saúde relata preocupação com idosos de uma instituição de longa permanência (ILPI) que vivem em isolamento, sofrendo agressões e com sinais de contenção física e lesões por pressão. Qual a conduta da equipe de saúde?",
  options: [
    "Formalizar denúncia ao Conselho do Idoso, considerando que não requer intervenção clínica imediata.",
    "Oferecer apoio clínico apenas para os casos de maior vulnerabilidade, respeitando a autonomia da ILPI.",
    "Articular ação intersetorial com órgãos de controle social, registrar notificação compulsória de violência institucional e elaborar plano de ação conjunta.",
    "Agendar reuniões para educação permanente, sem envolver instâncias legais."
  ],
  correctAnswer: 2,
  explanation: "Suspeita de violência institucional contra idosos exige notificação compulsória e ação intersetorial (rede de proteção e controle social), além de plano de intervenção e assistência direta às vítimas."
}
];
