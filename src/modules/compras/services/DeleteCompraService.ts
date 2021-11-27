import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import { CompraRepository } from "../typeorm/repositories/CompraRepository";

interface IRequest {
  id: string;
}

class DeleteCompraService {
  public async execute({ id }: IRequest): Promise<void> {
    const compraRepository = getCustomRepository(CompraRepository);

    const compra = await compraRepository.findById(id);

    if (!compra) {
      throw new AppError("Compra não encontrada!");
    }

    await compraRepository.softRemove(compra).catch((err) => console.log(err));
  }
}

export default DeleteCompraService;
