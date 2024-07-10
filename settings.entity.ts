import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isNotificationEnabled: boolean;

  @Column({ default: true })
  isNewDashboardEnabled: boolean;

  @Column()
  timezone: string;
}
