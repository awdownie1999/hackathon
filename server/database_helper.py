import mysql.connector
import time

class Database:

    def __init__(self):
        time.sleep(5)
        self.con = mysql.connector.connect(
            host="db",
            user="root",
            password="password",
            database="uu_code_challenge",
            auth_plugin = 'mysql_native_password'
        )
        self.cursor = self.con.cursor(dictionary=True)

    def fetch_all(self, query_sql):
        self.cursor.execute(query_sql)
        result = self.cursor.fetchall()
        self.con.commit()
        return result

    def fetch_one(self, query_sql):
        self.cursor.execute(query_sql)
        result = self.cursor.fetchone()
        self.con.commit()
        return result

    # Ensure we clean up the db instance
    def __del__(self):
        self.cursor.close()
        self.con.close()