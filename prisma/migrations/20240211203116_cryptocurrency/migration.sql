-- CreateTable
CREATE TABLE `Cryptocurrency` (
    `cryptocurrencyId` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(255) NOT NULL,
    `shortName` VARCHAR(7) NOT NULL,

    PRIMARY KEY (`cryptocurrencyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserCryptocurrency` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `cryptocurrencyId` INTEGER NOT NULL,

    UNIQUE INDEX `UserCryptocurrency_userId_cryptocurrencyId_key`(`userId`, `cryptocurrencyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserCryptocurrency` ADD CONSTRAINT `UserCryptocurrency_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCryptocurrency` ADD CONSTRAINT `UserCryptocurrency_cryptocurrencyId_fkey` FOREIGN KEY (`cryptocurrencyId`) REFERENCES `Cryptocurrency`(`cryptocurrencyId`) ON DELETE RESTRICT ON UPDATE CASCADE;
