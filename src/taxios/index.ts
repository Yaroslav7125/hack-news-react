import { HackNews } from '../types';
import { Taxios } from '@simplesmiler/taxios';
import axios from 'axios';

export const taxios = new Taxios<HackNews>(axios.create({ baseURL: 'https://api.hnpwa.com/v0' }));
