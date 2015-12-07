####
# Items
####
Item.destroy_all
User.destroy_all

@user_1 = User.create(email: "jacopo.beschi@intersail.it", password: "password")
@user_2 = User.create(email: "massimiliano.redolfi@intersail.it", password: "password")

# jacopo items
Item.create(title: "ruby", description: "ruby is beatiful", body: "", user: @user_1, due_date: 1.hour.ago)
Item.create(title: "javascript", description: "javascript is beatiful", body: "", user: @user_1, due_date: 1.hour.from_now)
Item.create(title: "java", description: "java is beatiful?", body: "", user: @user_1, due_date: 1.day.from_now)

# massimilano items
Item.create(title: "swift", description: "swift is beatiful", body: "", user: @user_2, due_date: Time.new)