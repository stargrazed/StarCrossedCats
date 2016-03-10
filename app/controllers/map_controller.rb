class MapController < ApplicationController
  layout 'application'

  def index
    @star_index= [[0,8,23], [1,11,27], [2,24,43], [3,36,86], [4,38,82], [5,64,99], [6,35,105]]
  end
end
