using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Collections.Generic;
using System.Text;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace Ventas.Models
{
    public class UsersModel
    {

        static string CadenaDeConexion = "Data Source=localhost;Database=ventas;User ID=robetorr;Password=rt988311";
        MySqlConnection conn = new MySqlConnection(CadenaDeConexion);

        private void OpenConnection()
        {
            if (conn.State != ConnectionState.Open)
            {
                conn.ConnectionString = CadenaDeConexion;
                conn.Open();
            }
        }
        public void iusers(string codigo,
                              string nombre)
        {
            OpenConnection();
            System.Data.IDbCommand dbcmd = conn.CreateCommand();
            string sql = "insert into servicios " +
                         "(codigo, nombre) values " +
                            "('" + codigo + "','" +
                              nombre + "');";

            dbcmd.CommandText = sql;
            System.Data.IDataReader reader = dbcmd.ExecuteReader();
            conn.Close();
            reader.Close();
            reader = null;
            dbcmd.Dispose();
            dbcmd = null;
        }
    }
}
