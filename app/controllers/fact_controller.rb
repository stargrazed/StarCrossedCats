class FactController < ApplicationController
  layout 'application'

  def index
    @facts = Fact.all
  end

  def import
    Fact.import(params[:file])
    redirect_to facts_url, notice: "Constellation Data Imported!"
  end
end
