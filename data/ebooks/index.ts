import { EbookSalesContent } from '../../types';
import { cardiologiaData } from './cardiologia';
import { cirurgiaData } from './cirurgia';
import { dermatologiaData } from './dermatologia';
import { endocrinologiaData } from './endocrinologia';
import { gastroenterologiaData } from './gastroenterologia';
import { ginecologiaData } from './ginecologia';
import { hematologiaData } from './hematologia';
import { imunologiaData } from './imunologia';
import { infectologiaData } from './infectologia';
import { nefrologiaData } from './nefrologia';
import { neurologiaData } from './neurologia';
import { obstetriciaData } from './obstetricia';
import { oncologiaData } from './oncologia';
import { pediatriaData } from './pediatria';
import { pneumologiaData } from './pneumologia';
import { reumatologiaData } from './reumatologia';
import { saudeColetivaData } from './saude-coletiva';
import { urologiaData } from './urologia';
import { kitCompletoData } from './kit-completo';

export const ebooksSalesMap: Record<string, EbookSalesContent> = {
  '1': cardiologiaData,
  '2': cirurgiaData,
  '3': dermatologiaData,
  '4': endocrinologiaData,
  '5': gastroenterologiaData,
  '6': ginecologiaData,
  '7': hematologiaData,
  '8': imunologiaData,
  '9': infectologiaData,
  '10': nefrologiaData,
  '11': neurologiaData,
  '12': obstetriciaData,
  '13': oncologiaData,
  '14': pediatriaData,
  '15': pneumologiaData,
  '16': reumatologiaData,
  '17': saudeColetivaData,
  '18': urologiaData,
  '19': kitCompletoData,
};
