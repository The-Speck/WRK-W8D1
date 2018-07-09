class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save!
      render :index
    else
      render json: { errors: @bench.errors.fullmessages }
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seats)
  end
end
