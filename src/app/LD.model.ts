export const LDAttributesMapping = {
  Horodateur: 'Horodateur',
  Titre: 'Titre',
  saison: 'saison',
  episode: 'episode',
  status: 'status',
  tisa: 'tisa',
  tisaep: 'tisaep',

  detail: {
    _prefix: 'detail ',
  },
};

export interface LD {
  Horodateur: Date;
  Titre: string;
  saison: number;
  episode: number;
  status: string;
  tisa: string;
  tisaep: string;

  detail: {};
}
