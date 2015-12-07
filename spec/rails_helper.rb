require 'spec_helper'

ENV["RAILS_ENV"] = "test"

require 'rails/all'
require 'rspec/rails'
require 'database_cleaner'

# Require support files
require File.expand_path("../../config/environment", __FILE__)
Dir[File.dirname(__FILE__) + '/support/**/*.rb'].each { |f| require f }

RSpec.configure do |config|
  config.include RequestMacros
  config.include Warden::Test::Helpers, type: :request
  config.include Shoulda::Matchers::ActiveRecord, type: :model

  ###
  # Database handling
  ###

  # migrate test schema if needed
  ActiveRecord::Migrator.migrate(File.join(Rails.root, 'db/migrate'))

  # Clean database at start of the suite and then
  # just uses transactions
  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end

  config.before(:all) do
    seed_data
  end
end

def seed_data
  User.destroy_all
  Item.destroy_all

  @user_1 = User.create(email: "user1@email.com", password: "password")
  @user_2 = User.create!(email: "user2@email.com", password: "password")
  @item_1 = Item.create!(title: "ruby", description: "ruby is beatiful", body: "", user: @user_1)
  @item_2 = Item.create!(title: "ruby completed", description: "ruby is beatiful", body: "", completed: true, user: @user_1)
  @item_3 = Item.create!(title: "ruby of user 2 completed", description: "ruby is beatiful", body: "", completed: true, user: @user_2)
end
