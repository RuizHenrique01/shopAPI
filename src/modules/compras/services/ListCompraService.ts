import { getCustomRepository } from "typeorm";
import Compra from "../typeorm/entities/Compra";
import { CompraRepository } from "../typeorm/repositories/CompraRepository";

class ListCompraService {
  public async execute(): Promise<Compra[]> {
    const compraRepository = getCustomRepository(CompraRepository);

    const compras = await compraRepository.findCompras();

    return compras;
  }
}

export default ListCompraService;
