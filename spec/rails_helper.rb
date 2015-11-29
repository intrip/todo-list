require 'spec_helper'

ENV["RAILS_ENV"] = "test"

require 'rails/all'
require 'rspec/rails'
require 'database_cleaner'

# Require support files
require File.expand_path("../../config/environment", __FILE__)
Dir[File.dirname(__FILE__) + '/support/**/*.rb'].each { |f| require f }

RSpec.configure do |config|
  config.include ControllerMacros
  
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

  config.before(:all) do
    DatabaseCleaner.start # usually this is called in setup of a test
  end

  config.after(:all) do
    DatabaseCleaner.clean
  end
end
