require 'rails_helper'

describe Item, type: :model do
  it {is_expected.to belong_to :user}
end
