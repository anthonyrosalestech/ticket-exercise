import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

sequelize.define("crcreditos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

const y = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  solicitud_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  fecha_contrato: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  canal_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cuenta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  monto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  asesor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  gestor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  estatus_cartera_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  referencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  validado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  revisado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  fecha_creacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  usuario_creacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  fecha_modificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  usuario_modificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  bloqueado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  poliza: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  esquema_cobro_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
};
