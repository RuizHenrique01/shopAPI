import { getCustomRepository } from "typeorm";
import Compra from "../typeorm/entities/Compra";
import { CompraRepository } from "../typeorm/repositories/CompraRepository";

interface IRequest {
  id: string;
}

class ShowCompraService {
  public async execute({ id }: IRequest): Promise<Compra> {
    const compraRepository = getCustomRepository(CompraRepository);

    const compra = await compraRepository.findById(id);

    return compra!;
  }
}

export default ShowCompraService;
