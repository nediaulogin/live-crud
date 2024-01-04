import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import StockRepository from 'App/Core/domain/repositories/stock-repository';
import findAllUseCase from 'App/Core/domain/use-cases/stock/find-all-use-case';

export default class StocksController {
  private readonly repositorio: StockRepository;
  private readonly findAll: findAllUseCase;

  constructor() {
    this.repositorio = new StockRepository();
    this.findAll = new findAllUseCase(this.repositorio);
  }

  public async index({ response }: HttpContextContract) {
    const list = await this.findAll.executar();
    return response.json(list);
  }
  public async store({ request }: HttpContextContract) {
  }

  public async show({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
