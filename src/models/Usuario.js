module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("usuario", {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
    },
        { freezeTableName: true}
    )

    return Usuario
}

