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
  @item_1 = Item.create(title: "ruby", description: "ruby is beatiful", body: "")
  @item_2 = Item.create(title: "ruby completed", description: "ruby is beatiful", body: "", completed: true)
  @user_1 = User.create(email: "user1@email.com")
end
