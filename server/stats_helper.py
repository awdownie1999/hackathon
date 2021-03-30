from database_helper import Database


class StatsHelper():

    def __init__(self):
        self.database = Database()
        print("Stats Helping initialising!")

    def select_all_users(self):
        result = self.database.fetch_all("SELECT * FROM user")
        return result

    def select_all_problems(self):
        result = self.database.fetch_all("SELECT * FROM problem")
        return result

    # HINT: You can define more queries here, along with some python logic to calculate!
    def calculate_another_stat(self):
      # all_rows = self.database.fetch_all("")
      return None
