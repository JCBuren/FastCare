class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/patients" do
    Patient.all.to_json
  end

  get "/providers" do
    Provider.all.to_json
  end

  post "/patients" do
    newPatientOnTheBackend = Patient.create(
      firstname: params[:firstname],
      lastname: params[:lastname],
      dob: params[:dob],
      email: params[:email],
      location: params[:location]
      
      )
      

      newPatientOnTheBackend.to_json

  end
end
