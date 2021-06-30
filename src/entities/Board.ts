import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Sequelize, Table } from "sequelize-typescript";

@Table({tableName:'board',timestamps:false})
export class Board extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
    })
    id :string;

    @Column({
        type:DataType.STRING,
    })
    name:string;

}