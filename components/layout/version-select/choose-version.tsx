'use client';

import Image from 'next/image';

import { Link } from '#/i18n/routing';

import { Modal } from '#components/modal';
import { ModalContent } from '#components/modal/modal-content';
import { useModal } from '#components/modal/store';

import diagnocat10 from '#assets/diagnocat-10.png';
import diagnocat20 from '#assets/diagnocat-20.png';

export const VersionSelect = () => {
    const { id } = useModal();

    if (id !== 'versionSelect') return null;

    return (
        <Modal>
            <ModalContent>
                <div>
                    <div className="text-center">Which version of Diagnocat are you using?</div>
                    <div className="mx-auto mt-2 flex flex-col items-center justify-center gap-2 text-center lg:flex-row">
                        <Link
                            className="text-center"
                            href="https://ca.diagnocat.com/login"
                            target="_blank"
                        >
                            <Image
                                src={diagnocat20}
                                className="rounded-xl lg:w-150"
                                alt="Diagnocat 1.0"
                                width={300}
                            />
                            Diagnocat 1.0
                        </Link>
                        <Link
                            className="text-center"
                            href="https://app.diagnocat.ca/sign-in"
                            target="_blank"
                        >
                            <Image
                                src={diagnocat10}
                                className="rounded-xl lg:w-150"
                                alt="Diagnocat 2.0"
                                width={300}
                            />
                            Diagnocat 2.0
                        </Link>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    );
};
