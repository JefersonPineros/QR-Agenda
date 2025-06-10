import { AsistentesModel } from './asistentesModel';

export class EventModel {
  constructor(
    public nombre_evento?: string,
    public fecha_evento?: Date,
    public ponente?: string,
    public tema?: string,
    public asistentes?: Array<AsistentesModel>
  ) {}
}
