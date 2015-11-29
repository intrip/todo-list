require 'rails_helper'

module Helpers
  module Request
    module Mail
      def read_fixture_rspec(action)
        IO.readlines(File.join(Rails.root, 'spec', 'support', 'fixtures', self.class.mailer_class.name.underscore, action))
      end
    end
  end
end
